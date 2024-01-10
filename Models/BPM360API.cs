using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MLSI.Models
{
    public class BPM360API
    {
    }
    public class BPM360
    {
        public string api_key { get; set; }
    }

    public class data
    {
        public string apiid { get; set; }
        public string first_name { get; set; }
        public string lastName { get; set; }
        public string mobileNumber { get; set; }
        public string current_school { get; set; }
        public string dob { get; set; }
        public string grade { get; set; }
        public string parent_type { get; set; }
        public string parentname { get; set; }
        public string emailId { get; set; }
        public string leadsFrom { get; set; }
        public string campaign { get; set; }
        public string medium { get; set; }
        public string gcl_id { get; set; }
    }

    public class Bpmmain
    {
        public BPM360 BPM360 { get; set; }
        public data data { get; set; }
    }
}