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
                //strUserId = "sa";
                //strPassword = "idawebsite";
                //strServerName = @"Itserver";
                //strDBName = "db_CMS";

                //strUserId = "cms";
                //strPassword = "P@ssw0rd_15684";
                //strServerName = @"103.241.181.144,8181";

                strUserId = "prdzllbiz";
                strPassword = "a@cA1!7";
                strServerName = @"103.11.155.121";

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