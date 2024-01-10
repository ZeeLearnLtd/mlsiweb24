using System.Web;
using System.Web.Optimization;

namespace MLSI
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            //bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
            //            "~/Scripts/jquery-{version}.js"));

            //bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
            //            "~/Scripts/jquery.validate*"));

            //// Use the development version of Modernizr to develop with and learn from. Then, when you're
            //// ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            //bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
            //            "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/Scripts").Include(
                      "~/Scripts/jquery-2.1.4.min.js",
                      "~/Scripts/bootstrap.min.js",
                      "~/Scripts/font-awesome.min.js",
                      "~/Scripts/jquery.fancybox.3.4.1.min.js",
                      "~/Scripts/owl.carousel.min.js",
                      "~/Scripts/custum.js",
                       "~/Scripts/aos.min.js",
                       "~/Scripts/angular.min.js",
                        "~/Scripts/App.js",
                        "~/Scripts/Service.js",
                        "~/Scripts/Controller.js"
                      ));

            bundles.Add(new StyleBundle("~/Content/Styles").Include(
                     "~/Content/animate.min.css",
                      "~/Content/bootstrap.min.css",
                      "~/Content/font-awesome.min.css",
                      "~/Content/jquery.fancybox.3.4.1.min.css",
                      "~/Content/owl.carousel.min.css",
                      "~/Content/style.min.css"
                      ));
            BundleTable.EnableOptimizations = false;
        }
    }
}
