using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.IO;
using System.Xml;
using MLSI.Models;
using System.Web;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;

namespace MLSI.Controllers
{
    [RoutePrefix("WebRoute")]
    public class WebApiController : ApiController
    {
        #region Global Declaration
        BussinessLogic bl = new BussinessLogic();
        XmlDocument doc = new XmlDocument();
        string result = "";
        #endregion
        protected internal virtual JsonTextActionResult JsonText(string jsonText)
        {
            return new JsonTextActionResult(Request, jsonText);
        }

        [Route("MLSIEnquiry")]
        [HttpPost]
        public IHttpActionResult MLSIEnquiry([FromBody] JObject objdata)
        {
            dynamic fileobj = new JObject();
            fileobj.xml = "{'root':{'subroot':" + objdata.ToString() + " }}";

            string strJson = "{ProjectId:'" + objdata["ProjectId"].ToString() + "',Mobile:'" + objdata["Mobile"].ToString() + "',Email:'" + objdata["Email"].ToString() + "'}";
            string srtres = bl.getdatatablejsondata("Proc_CheckIsExist", strJson, "connectionstring");
            JArray jsonArray = JArray.Parse(srtres);
            dynamic data = JObject.Parse(jsonArray[0].ToString());
            if (data["IsNew"].ToString() == "1")
            {
                try
                {
                    using (var client = new HttpClient())
                    {
                        Bpmmain p = new Bpmmain();
                        // BPM360 b3 = new BPM360();
                        data d = new data();
                        // b3.api_key = "WkV2d912Fh8t4WQkQELTFY37gkZgGji"; 

                        dynamic objres = JObject.Parse(objdata.ToString());
                        d.apiid = "4F35BA7729E50C1F9EB80DC0305536CD";
                        d.lastName = objres["ChildName"].ToString();
                        d.mobileNumber = objres["Mobile"].ToString();
                        d.emailId = objres["Email"].ToString();
                        d.grade = objres["class"].ToString();
                        d.leadsFrom = objres["utm_source"].ToString();
                        d.campaign = objres["utm_compaign"].ToString();
                        d.medium = objres["utm_medium"].ToString();
                        d.parentname = objres["FirstName"].ToString();
                        //p.BPM360 = b3;
                        p.data = d;
                        System.Net.ServicePointManager.SecurityProtocol =
    SecurityProtocolType.Tls12 | SecurityProtocolType.Tls11 | SecurityProtocolType.Tls;
                        var response = client.PostAsJsonAsync("https://mlsi.myschoolone.com/mlsiapi.php", d).Result;
                        return JsonText(bl.getdatatablejsondata("Proc_SaveEnquiry", fileobj.ToString(), "connectionstring"));

                        //return JsonText(bl.getdatatablejsondata("Proc_SaveEnquiry", fileobj.ToString(), "connectionstring"));
                    }
                }
                catch (Exception ex)
                {
                    return JsonText(bl.getdatatablejsondata("Proc_SaveEnquiry", fileobj.ToString(), "connectionstring"));
                }
            }
            else
            {
                return JsonText("");
            }
        }


        [Route("GetStateCity")]
        [HttpPost]
        public IHttpActionResult GetStateCity([FromBody] JObject objdata)
        {
            return JsonText(bl.getdatatablejsondata("Proc_GetStateCity", objdata.ToString(), "connectionstring"));
        }
        [Route("GetMediaMaster")]
        [HttpPost]
        public IHttpActionResult GetMediaMaster([FromBody] JObject objdata)
        {
            return JsonText(bl.GetDataXmltoJson("GET_MediaMaster", objdata.ToString(), "connectionstring"));
        }
        [Route("GetMediaMasterId")]
        [HttpPost]
        public IHttpActionResult GetMediaMasterId([FromBody] JObject objdata)
        {
            return JsonText(bl.GetDataXmltoJson("GET_MediaMaster_Id", objdata.ToString(), "connectionstring"));
        }
        [Route("GetTagCount")]
        [HttpPost]
        public IHttpActionResult GetTagCount([FromBody] JObject objdata)
        {
            return JsonText(bl.getdatatablejsondata("Proc_GetTag_Count", objdata.ToString(), "connectionstring"));
        }
        [Route("GetMediaDate")]
        [HttpPost]
        public IHttpActionResult GetMediaDate([FromBody] JObject objdata)
        {
            return JsonText(bl.getdatatablejsondata("Proc_GetMedia_Date", objdata.ToString(), "connectionstring"));
        }
        [Route("Get_MediaMaster_Web")]
        [HttpPost]
        public IHttpActionResult Get_MediaMaster_Web([FromBody] JObject objdata)
        {
            return JsonText(bl.getdatatablejsondata("Proc_Get_MediaMaster_Web", objdata.ToString(), "connectionstring"));
        }

        [Route("SaveComments")]
        [HttpPost]
        public IHttpActionResult SaveComments([FromBody] JObject objdata)
        {
            return JsonText(bl.getdatatablejsondata("Poc_SaveComments", objdata.ToString(), "connectionstring"));
        }

        //[Route("GetFranchiseeDetails")]
        //[HttpPost]
        //public IHttpActionResult GetFranchiseeDetails([FromBody] JObject objdata)
        //{
        //    return JsonText(bl.GetDataXmltoJson("pr_getFranchiseeXML", objdata.ToString(), "connectionstring1"));
        //}
        //[Route("GetFranchiseeDetailsCity")]
        //[HttpPost]
        //public IHttpActionResult GetFranchiseeDetailsCity([FromBody] JObject objdata)
        //{
        //    return JsonText(bl.GetDataXmltoJson("pr_getFranchiseeXML_city", objdata.ToString(), "connectionstring1"));
        //}
        //[Route("GetFranchiseedetailsStateCitywise")]
        //[HttpPost]
        //public IHttpActionResult GetFranchiseedetailsStateCitywise([FromBody] JObject objdata)
        //{
        //    return JsonText(bl.getdatatablejsondata("pr_getFranchiseedetailsStateCitywise", objdata.ToString(), "connectionstring1"));
        //}

    }
}
