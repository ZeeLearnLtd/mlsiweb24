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
      string str = obj.getdatatablejsondata("Proc_Get_PageMaster_Existing_mvc", menu, "connectionstring");
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

    public blogPageData GetblogPageData(string menu)
    {
      BussinessLogic bussinessLogic = new BussinessLogic();
      DataSet dataSet = new DataSet();
      string text = bussinessLogic.getdatatablejsondata("usp_getblogdata_mvc", menu, "connectionstring");
      dynamic val = Json.Decode(text);
      blogPageData blogPageData2 = new blogPageData();
      if (val != null)
      {
        blogPageData2.Name = ((val[0]["MetaUrl"] == null) ? "" : val[0]["MetaUrl"]);
        blogPageData2.Description = ((val[0]["MetaDescription"] == null) ? "" : val[0]["MetaDescription"]);
        blogPageData2.LongDescription = ((val[0]["long1"] == null) ? "" : val[0]["long1"]);
        blogPageData2.PageUrl = ((val[0]["PageUrl"] == null) ? "" : val[0]["PageUrl"]);
        blogPageData2.MainImage = ((val[0]["MetaImageurl"] == null) ? "" : val[0]["MetaImageurl"]);
        blogPageData2.VideoUrl = "";
        blogPageData2.MetaTitle = ((val[0]["MetaTitle"] == null) ? "" : val[0]["MetaTitle"]);
        blogPageData2.MetaKeyword = ((val[0]["MetaKeyword"] == null) ? "" : val[0]["MetaKeyword"]);
        blogPageData2.MetaDescription = ((val[0]["MetaDescription"] == null) ? "" : val[0]["MetaDescription"]);
        blogPageData2.MetaAuthor = ((val[0]["MetaAuthor"] == null) ? "" : val[0]["MetaAuthor"]);
        blogPageData2.MetaUrl = ((val[0]["MetaUrl"] == null) ? "" : val[0]["MetaUrl"]);
        blogPageData2.MetaImagePath = ((val[0]["MetaImageurl"] == null) ? "" : val[0]["MetaImageurl"]);
        blogPageData2.CanonicalTag = ((val[0]["CanonicalTag"] == null) ? "" : val[0]["CanonicalTag"]);
        blogPageData2.CanonicalUrl = ((val[0]["MetaUrl"] == null) ? "" : val[0]["MetaUrl"]);
        blogPageData2.UtmTag = ((val[0]["UtmTag"] == null) ? "" : val[0]["UtmTag"]);
        blogPageData2.UtmScript = ((val[0]["UtmScript"] == null) ? "" : val[0]["UtmScript"]);
        blogPageData2.AnalyticalCode = ((val[0]["AnalyticalCode"] == null) ? "" : val[0]["AnalyticalCode"]);
        blogPageData2.BannerImages = "";
        if (val[0]["blog"] != null)
        {
          blogPageData2.blog = ((val[0]["blog"] == null) ? "" : Json.Decode(val[0]["blog"]));
        }
        else
        {
          blogPageData2.blog = new string[0];
        }
        if (val[0]["dateCreated"] != null)
        {
          blogPageData2.dateCreated = ((DateTime)DateTime.Parse(val[0]["dateCreated"]).Date).ToString("yyyy-MM-dd");
        }
        else
        {
          blogPageData2.dateCreated = "";
        }
        if (val[0]["files"] != null)
        {
          blogPageData2.files = ((val[0]["files"] == null) ? "" : Json.Decode(val[0]["files"]));
        }
        else
        {
          blogPageData2.files = new string[0];
        }
      }
      return blogPageData2;
    }

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
public class blogPageData
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
  public string micrositedata { get; set; }
  public string dateCreated { get; set; }
  public Array blog { get; set; }
  public Array files { get; set; }
}



