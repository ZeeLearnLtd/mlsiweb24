using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MLSI.Models;
using System.Configuration;

namespace MLSI.Controllers
{
    public class HomeController : Controller
    {
        BussinessLogic bl = new BussinessLogic();
        string PgController = "Home";
        string ProjectId = ConfigurationManager.AppSettings["ProjectId"].ToString();
        public ActionResult Index()
        {
            PagesData pd = new PagesData();
            string PgAction = "Index";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }
        public ActionResult IndexOLD()
        {
            PagesData pd = new PagesData();
            string PgAction = "IndexOLD";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }
        public ActionResult MLSIFaculty()
        {
            PagesData pd = new PagesData();
            string PgAction = "MLSIFaculty";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }

        public ActionResult Mission()
        {
            PagesData pd = new PagesData();
            string PgAction = "Mission";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }
        public ActionResult Vision()
        {
            PagesData pd = new PagesData();
            string PgAction = "Vision";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }
        public ActionResult Message_from_the_Chairman()
        {
            PagesData pd = new PagesData();
            string PgAction = "Message_from_the_Chairman";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }
        public ActionResult Message_from_the_Advisor()
        {
            PagesData pd = new PagesData();
            string PgAction = "Message_from_the_Advisor";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }
        public ActionResult School_Leadership_Team()
        {
            PagesData pd = new PagesData();
            string PgAction = "School_Leadership_Team";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }
        public ActionResult The_Management()
        {
            PagesData pd = new PagesData();
            string PgAction = "The_Management";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }
        public ActionResult Why_Choose_MLSI()
        {
            PagesData pd = new PagesData();
            string PgAction = "Why_Choose_MLSI";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }
        public ActionResult Eligibility()
        {
            PagesData pd = new PagesData();
            string PgAction = "Eligibility";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }
        public ActionResult Enquire_Now()
        {
            PagesData pd = new PagesData();
            string PgAction = "Enquire_Now";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            if (PageObj.MetaTitle == null)
            {
                PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'Index'}");
            }
            ViewBag.PageData = PageObj;
            ViewBag.CaptchaStr = bl.RandomString(6);
            return View();
        }
        public ActionResult Admission_Procedure()
        {
            PagesData pd = new PagesData();
            string PgAction = "Admission_Procedure";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }
        public ActionResult Fees()
        {
            PagesData pd = new PagesData();
            string PgAction = "Fees";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }
        public ActionResult FAQs()
        {
            PagesData pd = new PagesData();
            string PgAction = "FAQs";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }


        public ActionResult Learning_at_MLSI()
        {
            PagesData pd = new PagesData();
            string PgAction = "Learning_at_MLSI";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }
        public ActionResult The_IB_Programmes()
        {
            PagesData pd = new PagesData();
            string PgAction = "The_IB_Programmes";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }
        public ActionResult Primary_Years_Programme()
        {
            PagesData pd = new PagesData();
            string PgAction = "Primary_Years_Programme";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }
        public ActionResult Middle_Years_Programme()
        {
            PagesData pd = new PagesData();
            string PgAction = "Middle_Years_Programme";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }
        public ActionResult IB_Diploma_Programme()
        {
            PagesData pd = new PagesData();
            string PgAction = "IB_Diploma_Programme";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }
        public ActionResult Clubs_and_Extra_Curricular_Activities()
        {
            PagesData pd = new PagesData();
            string PgAction = "Clubs_and_Extra_Curricular_Activities";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }
        public ActionResult The_Arts()
        {
            PagesData pd = new PagesData();
            string PgAction = "The_Arts";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }
        public ActionResult Community_Outreach()
        {
            PagesData pd = new PagesData();
            string PgAction = "Community_Outreach";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }
        public ActionResult Learning_Spaces()
        {
            PagesData pd = new PagesData();
            string PgAction = "Learning_Spaces";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }
        public ActionResult Sports_Infrastructure()
        {
            PagesData pd = new PagesData();
            string PgAction = "Sports_Infrastructure";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }
        public ActionResult Transport()
        {
            PagesData pd = new PagesData();
            string PgAction = "Transport";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }
        public ActionResult Pastoral_Care()
        {
            PagesData pd = new PagesData();
            string PgAction = "Pastoral_Care";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }
        public ActionResult Safety_Health_and_Security()
        {
            PagesData pd = new PagesData();
            string PgAction = "Safety_Health_and_Security";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }
        public ActionResult School_Calendar()
        {
            PagesData pd = new PagesData();
            string PgAction = "School_Calendar";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }
        public ActionResult Career_Counselling()
        {
            PagesData pd = new PagesData();
            string PgAction = "Career_Counselling";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }



        public ActionResult PhotoGallery()
        {
            PagesData pd = new PagesData();
            string PgAction = "PhotoGallery";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }
        public ActionResult VideoGallery()
        {
            PagesData pd = new PagesData();
            string PgAction = "VideoGallery";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }
        public ActionResult CASGallery()
        {
            PagesData pd = new PagesData();
            string PgAction = "CASGallery";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }
        public ActionResult ExhibitionGallery()
        {
            PagesData pd = new PagesData();
            string PgAction = "ExhibitionGallery";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }
        public ActionResult ParentSpeak()
        {
            PagesData pd = new PagesData();
            string PgAction = "ParentSpeak";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }

        public ActionResult StudentsSpeak()
        {
            PagesData pd = new PagesData();
            string PgAction = "StudentsSpeak";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }

        public ActionResult News()
        {
            PagesData pd = new PagesData();
            string PgAction = "News";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }
        public ActionResult Events()
        {
            PagesData pd = new PagesData();
            string PgAction = "Events";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }
        public ActionResult Blog()
        {
            PagesData pd = new PagesData();
            string PgAction = "Blog";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }
        public ActionResult Contact()
        {
            PagesData pd = new PagesData();
            string PgAction = "Contact";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }
        public ActionResult PrivacyPolicy()
        {
            PagesData pd = new PagesData();
            string PgAction = "PrivacyPolicy";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }
        public ActionResult SiteMap()
        {
            PagesData pd = new PagesData();
            string PgAction = "SiteMap";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }
        //public ActionResult Contact()
        //{
        //    ViewBag.Message = "Your contact page.";

        //    return View();
        //}

        public ActionResult MLSIThankYou()
        {
            PagesData pd = new PagesData();
            string PgAction = "MLSIThankYou";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }
        public ActionResult Details()
        {
            PagesData pd = new PagesData();
            string PgAction = "Details";
            CmsPageData PageObj = new CmsPageData();
            PageObj = pd.GetPageData("{ProjectId:'" + ProjectId + "',PgController:'" + PgController + "',PgAction:'" + PgAction + "'}");
            ViewBag.PageData = PageObj;
            return View();
        }
    }
}


//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Web;
//using System.Web.Mvc;

//namespace MLSI.Controllers
//{
//    public class HomeController : Controller
//    {
//        public ActionResult Index()
//        {
//            return View();
//        }
//        public ActionResult IndexOLD()
//        {
//            return View();
//        }
//        public ActionResult MLSIFaculty()
//        {
//            return View();
//        }


//        public ActionResult Mission()
//        {
//            return View();
//        }
//        public ActionResult Vision()
//        {
//            return View();
//        }
//        public ActionResult Message_from_the_Chairman()
//        {
//            return View();
//        }
//        public ActionResult Message_from_the_Advisor()
//        {
//            return View();
//        }
//        public ActionResult School_Leadership_Team()
//        {
//            return View();
//        }
//        public ActionResult The_Management()
//        {
//            return View();
//        }




//        public ActionResult Why_Choose_MLSI()
//        {
//            return View();
//        }
//        public ActionResult Eligibility()
//        {
//            return View();
//        }
//        public ActionResult Enquire_Now()
//        {
//            return View();
//        }
//        public ActionResult Admission_Procedure()
//        {
//            return View();
//        }
//        public ActionResult Fees()
//        {
//            return View();
//        }
//        public ActionResult FAQs()
//        {
//            return View();
//        }


//        public ActionResult Learning_at_MLSI()
//        {
//            return View();
//        }
//        public ActionResult The_IB_Programmes()
//        {
//            return View();
//        }
//        public ActionResult Primary_Years_Programme()
//        {
//            return View();
//        }
//        public ActionResult Middle_Years_Programme()
//        {
//            return View();
//        }
//        public ActionResult IB_Diploma_Programme()
//        {
//            return View();
//        }
//        public ActionResult Clubs_and_Extra_Curricular_Activities()
//        {
//            return View();
//        }
//        public ActionResult The_Arts()
//        {
//            return View();
//        }
//        public ActionResult Community_Outreach()
//        {
//            return View();
//        }
//        public ActionResult Learning_Spaces()
//        {
//            return View();
//        }
//        public ActionResult Sports_Infrastructure()
//        {
//            return View();
//        }
//        public ActionResult Transport()
//        {
//            return View();
//        }
//        public ActionResult Pastoral_Care()
//        {
//            return View();
//        }
//        public ActionResult Safety_Health_and_Security()
//        {
//            return View();
//        }
//        public ActionResult School_Calendar()
//        {
//            return View();
//        }
//        public ActionResult Career_Counselling()
//        {
//            return View();
//        }



//        public ActionResult PhotoGallery()
//        {
//            return View();
//        }
//        public ActionResult VideoGallery()
//        {
//            return View();
//        }
//        public ActionResult CASGallery()
//        {
//            return View();
//        }
//        public ActionResult ExhibitionGallery()
//        {
//            return View();
//        }
//        public ActionResult ParentSpeak()
//        {
//            return View();
//        }
//        public ActionResult StudentsSpeak()
//        {
//            return View();
//        }


//        public ActionResult News()
//        {
//            return View();
//        }
//        public ActionResult Events()
//        {
//            return View();
//        }
//        public ActionResult Blog()
//        {
//            return View();
//        }
//        public ActionResult Contact()
//        {
//            return View();
//        }
//        public ActionResult PrivacyPolicy()
//        {
//            return View();
//        }
//        public ActionResult SiteMap()
//        {
//            return View();
//        }
//        //public ActionResult Contact()
//        //{
//        //    ViewBag.Message = "Your contact page.";

//        //    return View();
//        //}
//    }
//}