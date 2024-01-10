using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Net;
using System.Xml;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.IO;
using Newtonsoft.Json;

namespace MLSI.Models
{
    public class BussinessLogic
    {
        ConnectionString conn = new ConnectionString();
        public string getdatatablejsondata(string proc, string json, string connection)
        {
            DataSet ds = new DataSet("data1");
            XmlDocument xml = new XmlDocument();
            XmlDocument doc = new XmlDocument();
            try
            {
                using (SqlConnection con = conn.sqlCon(connection))
                {
                    SqlCommand sqlComm = new SqlCommand(proc, con);
                    sqlComm.CommandType = CommandType.StoredProcedure;
                    if (json != "" && json != null)
                    {
                        var dict = JsonConvert.DeserializeObject<Dictionary<string, string>>(json);
                        foreach (var kv in dict)
                        {
                            if (kv.Key == "xml")
                            {
                                xml = (XmlDocument)JsonConvert.DeserializeXmlNode(kv.Value);
                                sqlComm.Parameters.AddWithValue("@xml", xml.InnerXml.ToString());
                            }
                            else
                            {
                                sqlComm.Parameters.AddWithValue("@" + kv.Key, kv.Value);
                            }
                        }

                    }
                    SqlDataAdapter da = new SqlDataAdapter();
                    da.SelectCommand = sqlComm;
                    da.Fill(ds);
                }
            }
            catch (Exception ex)
            {

            }
            string JSONresult = JsonConvert.SerializeObject(ds.Tables[0]);
            return JSONresult;
        }

        public string GetDataXmltoJson(string proc, string json, string connection)
        {
            DataSet ds = new DataSet("data1");
            XmlDocument xml = new XmlDocument();
            XmlDocument doc = new XmlDocument();
            if (connection == "" || connection == null) connection = "connectionstring";
            //using (SqlConnection conn = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings[connection].ConnectionString))
            //using (SqlConnection con = conn.sqlConnection("connectionstring"))
            using (SqlConnection con = conn.sqlCon(connection))
            {
                SqlCommand sqlComm = new SqlCommand(proc, con);
                sqlComm.CommandType = CommandType.StoredProcedure;
                if (json != "" && json != null)
                {
                    var dict = JsonConvert.DeserializeObject<Dictionary<string, string>>(json);
                    foreach (var kv in dict)
                    {
                        //string value = kv.Value;
                        //sqlComm.Parameters.AddWithValue("@" + kv.Key, value);
                        if (kv.Key == "xml")
                        {
                            xml = (XmlDocument)JsonConvert.DeserializeXmlNode(kv.Value);
                            sqlComm.Parameters.AddWithValue("@xml", xml.InnerXml.ToString());
                        }
                        else
                        {
                            sqlComm.Parameters.AddWithValue("@" + kv.Key, kv.Value);
                        }
                    }
                }
                SqlDataAdapter da = new SqlDataAdapter();
                da.SelectCommand = sqlComm;
                da.Fill(ds);
                string str = "";
                if (ds.Tables[0].Rows.Count >= 1)
                {
                    for (var i = 0; i <= ds.Tables[0].Rows.Count - 1; i++)
                    {
                        str = str + ds.Tables[0].Rows[i][0].ToString();

                    }
                    if (str == "")
                    {
                        str = "<root><subroot></subroot></root>";
                    }

                    xml.LoadXml(str);
                }
                else
                {
                    str = "<root><subroot><error>error</error></subroot></root>";
                    xml.LoadXml(str);
                }
            }
            return JsonConvert.SerializeXmlNode(xml);
        }

        public string RandomString(int length)
        {
            Random rand = new Random();
            const string pool = "abcdefghijklmnopqrstuvwxyz0123456789";
            var chars = Enumerable.Range(0, length)
                .Select(x => pool[rand.Next(0, pool.Length)]);
            return new string(chars.ToArray());
        }

    }

    public class JsonTextActionResult : IHttpActionResult
    {
        public HttpRequestMessage Request { get; }
        public string JsonText { get; }

        public JsonTextActionResult(HttpRequestMessage request, string jsonText)
        {
            Request = request;
            JsonText = jsonText;
        }
        public Task<HttpResponseMessage> ExecuteAsync(CancellationToken cancellationToken)
        {
            return Task.FromResult(Execute());
        }

        public HttpResponseMessage Execute()
        {
            var response = this.Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(JsonText, Encoding.UTF8, "application/json");

            return response;
        }
    }
}