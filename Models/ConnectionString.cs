using System.Data.SqlClient;

namespace MLSI.Models
{
    public class ConnectionString
    {
        string strUserId;
        string strPassword;
        string strServerName;
        string strDBName;

        public SqlConnection sqlCon(string connstr)
        {
            string strMasterCon = "";

            if (connstr == "connectionstring")
            {
                strUserId = "prodbIzftgD5379";
                strPassword = "zygft@7389";
                //strServerName = @"103.11.155.105,14343";
                strServerName = "103.11.155.110,14343"; // "10.112.0.105,14343";//@ "103.11.155.110,14343"; //"10.112.0.105,14343";//@

                strDBName = "db_CMS";
      }
            else if (connstr == "connectionstring1")
            {
                //strUserId = "prdzllbiz";
                //strPassword = "a@cA1!7";
                //strServerName = @"103.11.155.121";
                //strDBName = "ZILSFMS";
            }

            strMasterCon = "User ID=" + strUserId;
            strMasterCon = strMasterCon + ";password=" + strPassword;
            strMasterCon = strMasterCon + ";data source=" + strServerName;
            strMasterCon = strMasterCon + ";persist security info=False";
            strMasterCon = strMasterCon + ";initial catalog=" + strDBName;
            strMasterCon = strMasterCon + ";Connect Timeout=10000";

            return new SqlConnection(strMasterCon);
        }
    }
}
