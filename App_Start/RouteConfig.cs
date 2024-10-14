using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace MLSI
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

           
            routes.MapRoute(
                name: "mission",
                url: "mission",
                defaults: new { controller = "Home", action = "Mission", id = UrlParameter.Optional }
            );
      routes.MapRoute(
               name: "vision",
               url: "vision",
               defaults: new { controller = "Home", action = "Vision", id = UrlParameter.Optional }
           );
      routes.MapRoute(
               name: "message_from_the_chairman",
               url: "message_from_the_chairman",
               defaults: new { controller = "Home", action = "Message_from_the_Chairman", id = UrlParameter.Optional }
           );
      routes.MapRoute(
               name: "message_from_the_advisor",
               url: "message_from_the_advisor",
               defaults: new { controller = "Home", action = "Message_from_the_Advisor", id = UrlParameter.Optional }
           );
      routes.MapRoute(
              name: "school_leadership_team",
              url: "school_leadership_team",
              defaults: new { controller = "Home", action = "School_Leadership_Team", id = UrlParameter.Optional }
          );

      routes.MapRoute(
              name: "ib_programmes",
              url: "ib_programmes",
              defaults: new { controller = "Home", action = "The_IB_Programmes", id = UrlParameter.Optional }
          );
      routes.MapRoute(
              name: "ib_programmes/primary_years_programme",
              url: "ib_programmes/primary_years_programme",
              defaults: new { controller = "Home", action = "Primary_Years_Programme", id = UrlParameter.Optional }
          );
      routes.MapRoute(
              name: "ib_programmes/middle_years_programme",
              url: "ib_programmes/middle_years_programme",
              defaults: new { controller = "Home", action = "Middle_Years_Programme", id = UrlParameter.Optional }
          );
      routes.MapRoute(
              name: "ib_programmes/ib_diploma_programme",
              url: "ib_programmes/ib_diploma_programme",
              defaults: new { controller = "Home", action = "IB_Diploma_Programme", id = UrlParameter.Optional }
          );

      routes.MapRoute(
              name: "why_choose_mlsi",
              url: "why_choose_mlsi",
              defaults: new { controller = "Home", action = "Why_Choose_MLSI", id = UrlParameter.Optional }
          );
      routes.MapRoute(
              name: "eligibility",
              url: "eligibility",
              defaults: new { controller = "Home", action = "Eligibility", id = UrlParameter.Optional }
          );
      routes.MapRoute(
              name: "enquire_now",
              url: "enquire_now",
              defaults: new { controller = "Home", action = "Enquire_Now", id = UrlParameter.Optional }
          );
      routes.MapRoute(
              name: "admission_procedure",
              url: "admission_procedure",
              defaults: new { controller = "Home", action = "Admission_Procedure", id = UrlParameter.Optional }
          );
      routes.MapRoute(
              name: "fees",
              url: "fees",
              defaults: new { controller = "Home", action = "Fees", id = UrlParameter.Optional }
          );
      routes.MapRoute(
              name: "faqs",
              url: "faqs",
              defaults: new { controller = "Home", action = "FAQs", id = UrlParameter.Optional }
          );
      routes.MapRoute(
             name: "learning_at_mlsi",
             url: "learning_at_mlsi",
             defaults: new { controller = "Home", action = "Learning_at_MLSI", id = UrlParameter.Optional }
         );
      routes.MapRoute(
              name: "clubs_and_extra_curricular_activities",
              url: "clubs_and_extra_curricular_activities",
              defaults: new { controller = "Home", action = "Clubs_and_Extra_Curricular_Activities", id = UrlParameter.Optional }
          );
      routes.MapRoute(
              name: "the_arts",
              url: "the_arts",
              defaults: new { controller = "Home", action = "The_Arts", id = UrlParameter.Optional }
          );

      routes.MapRoute(
              name: "facilities/learning_spaces",
              url: "facilities/learning_spaces",
              defaults: new { controller = "Home", action = "Learning_Spaces", id = UrlParameter.Optional }
          );
      routes.MapRoute(
              name: "facilities/sports_infrastructure",
              url: "facilities/sports_infrastructure",
              defaults: new { controller = "Home", action = "Sports_Infrastructure", id = UrlParameter.Optional }
          );
      routes.MapRoute(
              name: "transport",
              url: "transport",
              defaults: new { controller = "Home", action = "Transport", id = UrlParameter.Optional }
          );
      routes.MapRoute(
              name: "pastoral_care",
              url: "pastoral_care",
              defaults: new { controller = "Home", action = "Pastoral_Care", id = UrlParameter.Optional }
          );
      routes.MapRoute(
              name: "safety_health_and_security",
              url: "safety_health_and_security",
              defaults: new { controller = "Home", action = "Safety_Health_and_Security", id = UrlParameter.Optional }
          );
      routes.MapRoute(
              name: "school_calendar",
              url: "school_calendar",
              defaults: new { controller = "Home", action = "School_Calendar", id = UrlParameter.Optional }
          );
      routes.MapRoute(
              name: "career_counselling",
              url: "career_counselling",
              defaults: new { controller = "Home", action = "Career_Counselling", id = UrlParameter.Optional }
          );
      routes.MapRoute(
             name: "mlsifaculty",
             url: "mlsifaculty",
             defaults: new { controller = "Home", action = "MLSIFaculty", id = UrlParameter.Optional }
         );
      routes.MapRoute(
            name: "photogallery",
            url: "photogallery",
            defaults: new { controller = "Home", action = "PhotoGallery", id = UrlParameter.Optional }
        );
      routes.MapRoute(
            name: "videogallery",
            url: "videogallery",
            defaults: new { controller = "Home", action = "VideoGallery", id = UrlParameter.Optional }
        );
      routes.MapRoute(
            name: "casgallery",
            url: "casgallery",
            defaults: new { controller = "Home", action = "CASGallery", id = UrlParameter.Optional }
        );
      routes.MapRoute(
            name: "parentspeak",
            url: "parentspeak",
            defaults: new { controller = "Home", action = "ParentSpeak", id = UrlParameter.Optional }
        );
      routes.MapRoute(
            name: "studentsspeak",
            url: "studentsspeak",
            defaults: new { controller = "Home", action = "StudentsSpeak", id = UrlParameter.Optional }
        );
      routes.MapRoute(
            name: "news",
            url: "news",
            defaults: new { controller = "Home", action = "News", id = UrlParameter.Optional }
        );
      routes.MapRoute(
            name: "blog",
            url: "blog",
            defaults: new { controller = "Home", action = "Blog", id = UrlParameter.Optional }
        );
       routes.MapRoute(
           name: "award",
           url: "award",
           defaults: new { controller = "Home", action = "Award", id = UrlParameter.Optional }
       );
       routes.MapRoute(
          name: "awardRoute",
          url: "award/{str}",
          defaults: new { controller = "Home", action = "Award", str = UrlParameter.Optional }
      );
            routes.MapRoute(
          name: "contact",
          url: "contact",
          defaults: new { controller = "Home", action = "Contact", id = UrlParameter.Optional }
      );

      routes.MapRoute(
          name: "blogRoute",
          url: "Blog/{location}",
          defaults: new { controller = "Home", action = "Blog", location = UrlParameter.Optional }
       );

    routes.MapRoute(
               name: "Default",
               url: "{controller}/{action}/{id}",
               defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
           );
    }
    }
}
