using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Web.Helpers;

namespace MLSI.Models
{
    public class PagesData
    {
        public CmsPageData GetPageData(string menu)
        {
            BussinessLogic obj = new BussinessLogic();
            DataSet ds = new DataSet();
            string str = obj.getdatatablejsondata("Proc_Get_PageMaster_Existing", menu, "connectionstring");
            dynamic objdata = Json.Decode(str);
            CmsPageData myClassList = new CmsPageData();
            if (objdata.Length > 0)
            {
                myClassList.PageId = objdata[0]["PageId"].ToString();
                myClassList.Name = objdata[0]["Name"];
                myClassList.Description = objdata[0]["Description"];
                myClassList.LongDescription = objdata[0]["LongDescription"];
                myClassList.PageUrl = objdata[0]["PageUrl"];
                myClassList.MainImage = objdata[0]["MainImage"];
                myClassList.VideoUrl = objdata[0]["VideoUrl"];
                myClassList.MetaTitle = objdata[0]["MetaTitle"];
                myClassList.MetaKeyword = objdata[0]["MetaKeyword"];
                myClassList.MetaDescription = objdata[0]["MetaDescription"];
                myClassList.MetaAuthor = objdata[0]["MetaAuthor"];
                myClassList.MetaUrl = objdata[0]["MetaUrl"];
                myClassList.MetaImagePath = objdata[0]["MetaImagePath"];
                myClassList.CanonicalTag = objdata[0]["CanonicalTag"];
                myClassList.CanonicalUrl = objdata[0]["CanonicalUrl"];
                myClassList.UtmTag = objdata[0]["UtmTag"];
                myClassList.UtmScript = objdata[0]["UtmScript"];
                myClassList.AnalyticalCode = objdata[0]["AnalyticalCode"];
                myClassList.BannerImages = objdata[0]["BannerImages"];

            }
            return myClassList;
        }
    }
    public class CmsPageData
    {
        public string PageId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string LongDescription { get; set; }
        public string PageUrl { get; set; }
        public string MainImage { get; set; }
        public string VideoUrl { get; set; }
        public string MetaTitle { get; set; }
        public string MetaKeyword { get; set; }
        public string MetaDescription { get; set; }
        public string MetaAuthor { get; set; }
        public string MetaUrl { get; set; }
        public string MetaImagePath { get; set; }
        public string CanonicalTag { get; set; }
        public string CanonicalUrl { get; set; }
        public string UtmTag { get; set; }
        public string UtmScript { get; set; }
        public string AnalyticalCode { get; set; }
        public string BannerImages { get; set; }
    }
}