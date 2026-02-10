App.controller('EnquiryCtrl', function ($scope, $http, $filter, API) {
    $scope.Enq = {};
    $scope.Enq.utm_medium = getQueryStringValue('utm_medium');
    $scope.Enq.utm_source = getQueryStringValue('utm_source');
    $scope.Enq.utm_compaign = getQueryStringValue('utm_campaign');

    $scope.Enq.WillingToInvest = '';
    $scope.Enq.HaveSpace = '';
    $scope.Enq.SoonStartsIn = '';




    $scope.countrySearch = '';
    $scope.mobileNumber = '';
    $scope.selectedCountry = null;
    $scope.countries = [];
    $scope.filteredCountries = [];

   



    $scope.getCountryList = function () {
        return [
            { name: 'Afghanistan', dialCode: '+93' },
            { name: 'Albania', dialCode: '+355' },
            { name: 'Algeria', dialCode: '+213' },
            { name: 'American Samoa', dialCode: '+1-684' },
            { name: 'Andorra', dialCode: '+376' },
            { name: 'Angola', dialCode: '+244' },
            { name: 'Anguilla', dialCode: '+1-264' },
            { name: 'Antarctica', dialCode: '+672' },
            { name: 'Antigua and Barbuda', dialCode: '+1-268' },
            { name: 'Argentina', dialCode: '+54' },
            { name: 'Armenia', dialCode: '+374' },
            { name: 'Aruba', dialCode: '+297' },
            { name: 'Australia', dialCode: '+61' },
            { name: 'Austria', dialCode: '+43' },
            { name: 'Azerbaijan', dialCode: '+994' },
            { name: 'Bahamas', dialCode: '+1-242' },
            { name: 'Bahrain', dialCode: '+973' },
            { name: 'Bangladesh', dialCode: '+880' },
            { name: 'Barbados', dialCode: '+1-246' },
            { name: 'Belarus', dialCode: '+375' },
            { name: 'Belgium', dialCode: '+32' },
            { name: 'Belize', dialCode: '+501' },
            { name: 'Benin', dialCode: '+229' },
            { name: 'Bermuda', dialCode: '+1-441' },
            { name: 'Bhutan', dialCode: '+975' },
            { name: 'Bolivia', dialCode: '+591' },
            { name: 'Bosnia and Herzegovina', dialCode: '+387' },
            { name: 'Botswana', dialCode: '+267' },
            { name: 'Brazil', dialCode: '+55' },
            { name: 'British Indian Ocean Territory', dialCode: '+246' },
            { name: 'British Virgin Islands', dialCode: '+1-284' },
            { name: 'Brunei', dialCode: '+673' },
            { name: 'Bulgaria', dialCode: '+359' },
            { name: 'Burkina Faso', dialCode: '+226' },
            { name: 'Burundi', dialCode: '+257' },
            { name: 'Cambodia', dialCode: '+855' },
            { name: 'Cameroon', dialCode: '+237' },
            { name: 'Canada', dialCode: '+1' },
            { name: 'Cape Verde', dialCode: '+238' },
            { name: 'Cayman Islands', dialCode: '+1-345' },
            { name: 'Central African Republic', dialCode: '+236' },
            { name: 'Chad', dialCode: '+235' },
            { name: 'Chile', dialCode: '+56' },
            { name: 'China', dialCode: '+86' },
            { name: 'Colombia', dialCode: '+57' },
            { name: 'Comoros', dialCode: '+269' },
            { name: 'Cook Islands', dialCode: '+682' },
            { name: 'Costa Rica', dialCode: '+506' },
            { name: 'Croatia', dialCode: '+385' },
            { name: 'Cuba', dialCode: '+53' },
            { name: 'Cyprus', dialCode: '+357' },
            { name: 'Czech Republic', dialCode: '+420' },
            { name: 'Democratic Republic of the Congo', dialCode: '+243' },
            { name: 'Denmark', dialCode: '+45' },
            { name: 'Djibouti', dialCode: '+253' },
            { name: 'Dominica', dialCode: '+1-767' },
            { name: 'Dominican Republic', dialCode: '+1-809' },
            { name: 'Ecuador', dialCode: '+593' },
            { name: 'Egypt', dialCode: '+20' },
            { name: 'El Salvador', dialCode: '+503' },
            { name: 'Equatorial Guinea', dialCode: '+240' },
            { name: 'Eritrea', dialCode: '+291' },
            { name: 'Estonia', dialCode: '+372' },
            { name: 'Ethiopia', dialCode: '+251' },
            { name: 'Fiji', dialCode: '+679' },
            { name: 'Finland', dialCode: '+358' },
            { name: 'France', dialCode: '+33' },
            { name: 'French Guiana', dialCode: '+594' },
            { name: 'French Polynesia', dialCode: '+689' },
            { name: 'Gabon', dialCode: '+241' },
            { name: 'Gambia', dialCode: '+220' },
            { name: 'Georgia', dialCode: '+995' },
            { name: 'Germany', dialCode: '+49' },
            { name: 'Ghana', dialCode: '+233' },
            { name: 'Gibraltar', dialCode: '+350' },
            { name: 'Greece', dialCode: '+30' },
            { name: 'Greenland', dialCode: '+299' },
            { name: 'Grenada', dialCode: '+1-473' },
            { name: 'Guadeloupe', dialCode: '+590' },
            { name: 'Guam', dialCode: '+1-671' },
            { name: 'Guatemala', dialCode: '+502' },
            { name: 'Guinea', dialCode: '+224' },
            { name: 'Guinea-Bissau', dialCode: '+245' },
            { name: 'Guyana', dialCode: '+592' },
            { name: 'Haiti', dialCode: '+509' },
            { name: 'Honduras', dialCode: '+504' },
            { name: 'Hong Kong', dialCode: '+852' },
            { name: 'Hungary', dialCode: '+36' },
            { name: 'Iceland', dialCode: '+354' },
            { name: 'India', dialCode: '+91' },
            { name: 'Indonesia', dialCode: '+62' },
            { name: 'Iran', dialCode: '+98' },
            { name: 'Iraq', dialCode: '+964' },
            { name: 'Ireland', dialCode: '+353' },
            { name: 'Israel', dialCode: '+972' },
            { name: 'Italy', dialCode: '+39' },
            { name: 'Jamaica', dialCode: '+1-876' },
            { name: 'Japan', dialCode: '+81' },
            { name: 'Jordan', dialCode: '+962' },
            { name: 'Kazakhstan', dialCode: '+7' },
            { name: 'Kenya', dialCode: '+254' },
            { name: 'Kiribati', dialCode: '+686' },
            { name: 'Kuwait', dialCode: '+965' },
            { name: 'Kyrgyzstan', dialCode: '+996' },
            { name: 'Laos', dialCode: '+856' },
            { name: 'Latvia', dialCode: '+371' },
            { name: 'Lebanon', dialCode: '+961' },
            { name: 'Lesotho', dialCode: '+266' },
            { name: 'Liberia', dialCode: '+231' },
            { name: 'Libya', dialCode: '+218' },
            { name: 'Liechtenstein', dialCode: '+423' },
            { name: 'Lithuania', dialCode: '+370' },
            { name: 'Luxembourg', dialCode: '+352' },
            { name: 'Macau', dialCode: '+853' },
            { name: 'Macedonia', dialCode: '+389' },
            { name: 'Madagascar', dialCode: '+261' },
            { name: 'Malawi', dialCode: '+265' },
            { name: 'Malaysia', dialCode: '+60' },
            { name: 'Maldives', dialCode: '+960' },
            { name: 'Mali', dialCode: '+223' },
            { name: 'Malta', dialCode: '+356' },
            { name: 'Marshall Islands', dialCode: '+692' },
            { name: 'Martinique', dialCode: '+596' },
            { name: 'Mauritania', dialCode: '+222' },
            { name: 'Mauritius', dialCode: '+230' },
            { name: 'Mexico', dialCode: '+52' },
            { name: 'Micronesia', dialCode: '+691' },
            { name: 'Moldova', dialCode: '+373' },
            { name: 'Monaco', dialCode: '+377' },
            { name: 'Mongolia', dialCode: '+976' },
            { name: 'Montenegro', dialCode: '+382' },
            { name: 'Montserrat', dialCode: '+1-664' },
            { name: 'Morocco', dialCode: '+212' },
            { name: 'Mozambique', dialCode: '+258' },
            { name: 'Myanmar', dialCode: '+95' },
            { name: 'Namibia', dialCode: '+264' },
            { name: 'Nauru', dialCode: '+674' },
            { name: 'Nepal', dialCode: '+977' },
            { name: 'Netherlands', dialCode: '+31' },
            { name: 'New Zealand', dialCode: '+64' },
            { name: 'Nicaragua', dialCode: '+505' },
            { name: 'Nigeria', dialCode: '+234' },
            { name: 'Norway', dialCode: '+47' },
            { name: 'Oman', dialCode: '+968' },
            { name: 'Pakistan', dialCode: '+92' },
            { name: 'Palestine', dialCode: '+970' },
            { name: 'Panama', dialCode: '+507' },
            { name: 'Peru', dialCode: '+51' },
            { name: 'Philippines', dialCode: '+63' },
            { name: 'Poland', dialCode: '+48' },
            { name: 'Portugal', dialCode: '+351' },
            { name: 'Qatar', dialCode: '+974' },
            { name: 'Romania', dialCode: '+40' },
            { name: 'Russia', dialCode: '+7' },
            { name: 'Saudi Arabia', dialCode: '+966' },
        ];
    }
    $scope.countries = $scope.getCountryList();
    $scope.filteredCountries = $scope.countries;

    $scope.filterCountries = function () {
        const search = this.countrySearch.toLowerCase();
        this.filteredCountries = this.countries.filter(c =>
            c.name.toLowerCase().includes(search)
        );
    }

    $scope.onCountrySearchChange = function () {
        var term = $scope.countrySearch.toLowerCase();
        $scope.filteredCountries = $scope.countries.filter(function (country) {
            return country.name.toLowerCase().includes(term);
        });

        // If current selection is filtered out, reset
        if (!$scope.filteredCountries.includes($scope.selectedCountry)) {
            $scope.selectedCountry = $scope.filteredCountries[0] || null;
        }
    }

    $scope.onCountryChange = function () {
        console.log('Country changed to:', $scope.selectedCountry);
        // Optional: Add logic here when user selects a country
    }





    //$scope.GetCountry = function () {
    //    $scope.CountryData = [];
    //    var objdata = {};
    //    API.Post("/WebRoute/GetFranchiseeDetails", objdata).then(function (response) {
    //        if (!response.data.root.subroot.error) {
    //            $scope.CountryData = $scope.checkundefined(response.data.root.subroot);

    //        }
    //    }, function myError(response) {
    //    });
    //};
    //$scope.GetCountryFranchisee = function () {
    //    $scope.CountryData = [];
    //    var objdata = {};
    //    API.Post("/WebRoute/GetFranchiseeDetailsCity", objdata).then(function (response) {
    //        if (!response.data.root.subroot.error) {
    //            $scope.CountryData = $scope.checkundefined(response.data.root.subroot);

    //        }
    //    }, function myError(response) {
    //    });
    //};





    //if ($scope.Enq.Type == 'P') {
    //    $scope.GetCountry();
    //}
    //else {
    //    if ($scope.Enq.utm_source == null || $scope.Enq.utm_source == '') {
    //        $scope.FieldsHideShow = true;
    //    }
       
    //    $scope.GetCountryFranchisee();
    //}
    

    $scope.StateData = [];
    $scope.GetStateData = function () {
        $scope.StateData=[];
        $scope.StateData = $scope.checkundefined($scope.Enq.Country.State);
    }
    $scope.CityData = [];
    $scope.GetCityData = function () {
        $scope.CityData = [];
        $scope.CityData = $scope.checkundefined($scope.Enq.State.City);
    }
    $scope.FranchiseeData = [];
    $scope.GetFranchiseeData = function () {
        $scope.FranchiseeData = [];
        $scope.FranchiseeData = $scope.checkundefined($scope.Enq.City.Franchisee);
    }

   
    $scope.MLSISubmit = function () {
        $scope.Enq.ProjectId = "2";
        $scope.Enq.utm_medium = $scope.Enq.utm_medium == null ? $scope.Enq.Source : $scope.Enq.utm_medium;
        $scope.Enq.utm_source = $scope.Enq.utm_source == null ? $scope.Enq.Source : $scope.Enq.utm_source;
        $scope.Enq.utm_compaign = $scope.Enq.utm_compaign == null ? $scope.Enq.Source : $scope.Enq.utm_compaign;
        //$scope.Enq.Country_Code = $scope.selectedCountry.dialCode == null ? '+91' : $scope.selectedCountry.dialCode;
        /*var objdata = { "xml": "{'root':{'subroot':" + angular.toJson($scope.Enq) };*/

        var objdata = $scope.Enq;
        if ($scope.EnquiryForm.$invalid == true) {
            angular.forEach($scope.EnquiryForm.$error.required, function (field) {
                field.$setDirty();

            });
        }
        else {
            if ($('#chkAgree1').prop("checked") == false) {
                $('#chkAgree1').addClass("Mandatorychkbox");
                return;
            }
            $scope.loader = true;
            $("#btnSubmit").attr("disabled", "disabled");
            $("#spnSubmit").text('Submitting..');
            objdata.City = "Mumbai";
            objdata.Country = "India";
            API.Post("/WebRoute/MLSIEnquiry", objdata).then(function (result) {
                if (!angular.isUndefined(result.data)) {
                    if (result?.data?.data?.recordset.length > 0) {
                        //$scope.postjson();
                        $scope.Enq = {};
                        window.location.href = "/Home/MLSIThankYou";
                    }
                    else {
                        $scope.loader = false;
                        $("#btnSubmit").attr("disabled", false);
                        $("#spnSubmit").text('Submit');
                        $scope.ErrorMsg = true;

                    }
                }


            }, function myError(response) {
            });

        }
    }



    //$scope.GetStateCity = function () {
    //    var StateCityData = [];
    //    var objdata = { PinCode:$scope.Enq.PinCode };
    //    API.Post("/WebRoute/GetStateCity", objdata).then(function (result) {
    //         StateCityData = $scope.checkundefined(result.data);
    //        if (StateCityData.length > 0) {
    //            $scope.Enq.State = StateCityData[0].statename;
    //            $scope.Enq.City = StateCityData[0].districtname;
    //            $scope.Enq.Location = StateCityData[0].taluk;
    //        }
    //        else {
    //            $scope.Enq.State = '';
    //            $scope.Enq.City = '';
    //        }
    //    }, function myError(response) {
    //    });
    //}
    $scope.checkundefined = function (obj) {
        return API.Setnullarray(obj);
    }
    $scope.SetCaptcha = function (CaptchaStr) {
        $scope.CaptchaStr = CaptchaStr;
    }
    function getQueryStringValue(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    $scope.ChangeClass = function () {
        if ($('#chkAgree1').prop("checked") == false) {
            $('#chkAgree1').addClass("Mandatorychkbox");
        }
        else {
            $('#chkAgree1').removeClass("Mandatorychkbox");
        }
    }
});

App.controller('IndexCtrl', function ($scope, $http, $filter, API) {
    $scope.PageNo = 1;
    $scope.NoofRecords = 10;
    $scope.WebPath = WebPath;
    $scope.GetTestimonial = function () {
        $scope.TestimonialData = [];
        var objdata = { "Type": 'Testimonial', "ProjectId": ProjectId, "PageNo": $scope.PageNo, "NoofRecords": $scope.NoofRecords };
        API.Post("/WebRoute/GetMediaMaster", objdata).then(function (response) {
            if (!response.data.root.subroot.error) {
                $scope.TestimonialData = $scope.checkundefined(response.data.root.subroot);
                setTimeout(function () {
                   testimonialCarousel();
                },200)
            }
        }, function myError(response) {
        });
    };
   // $scope.GetTestimonial();

    $scope.GetNewsAndEvents = function () {
        console.log("hi called");
        $scope.NewsAndEventsData = [];
        var objdata = { "Type": 'News', "ProjectId": ProjectId, "PageNo": $scope.PageNo, "NoofRecords": $scope.NoofRecords };
        API.Post("/WebRoute/GetMediaMaster", objdata).then(function (response) {
            if (!response.data.root.subroot.error) {
                $scope.NewsAndEventsData = $scope.checkundefined(response.data.root.subroot);
            }
        }, function myError(response) {
        });
    };
   // $scope.GetNewsAndEvents();

    $scope.checkundefined = function (obj) {
        return API.Setnullarray(obj);
    }
    function testimonialCarousel() {
        $('#testimonials-carousel').owlCarousel({
            loop: true,
            margin: 40,
            navSpeed: 1000,
            items: 2,
            smartSpeed: 1400,
            autoplay: true,
            autoplayTimeout: 8000,
            autoplayHoverPause: true,
            lazyLoad: true,
            responsiveClass: false,
            responsive: {
                0: {
                    dots: false,
                    nav: false
                },
                480: {},
                640: {},
                768: {},
                1000: {}
            },
            dots: false,
            nav: true,
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
        });
    }
});


App.controller('NewsAndEventsCtrl', function ($scope, $http, $filter, API, $sce) {
    $scope.WebPath = WebPath;
    $scope.TagName = '';
    $scope.PubDate = '';
    $scope.FullContent = true;
    $scope.itemsPerPage = 8;
    $scope.visibleCount = 8;
    $scope.visibleFiles = [];
    $scope.allFilesFlat = [];

    $scope.loading = false;
    //$scope.GetNewsAndEventsDetails = function (id) {
    //    $scope.NewsAndEventsData = [];
    //    var objdata = { "Id": id};
    //    API.Post("/WebRoute/GetMediaMasterId", objdata).then(function (response) {
    //        if (!response.data.root.subroot.error) {
    //            $scope.NewsAndEventsData = $scope.checkundefined(response.data.root.subroot);
    //            $scope.NewsTitle = $scope.NewsAndEventsData[0].Title;
    //            $scope.NewsShortDesc = $scope.NewsAndEventsData[0].Short;
    //            $scope.NewsLongDesc = $scope.NewsAndEventsData[0].Long;
    //            $scope.MainImagePath = $scope.NewsAndEventsData[0].MainImagePath;
    //            $scope.PublishedDate = $scope.NewsAndEventsData[0].FromDate;
    //            $scope.Tag = $scope.NewsAndEventsData[0].TagString.split('$$')[0];
    //            $scope.NewsId = $scope.NewsAndEventsData[0].Id;
                
    //        }
    //    }, function myError(response) {
    //    });
    //};
    
    $scope.trustedHtml = function (data) {
        return $sce.trustAsHtml(data);
    }
    $scope.ShowFullcontent = function () {
        $scope.FullContent = false;
            ;
    }
    $scope.checkundefined = function (obj) {
        return API.Setnullarray(obj);
    }

    $scope.isExternalUrl = function (url) {        
        return /^https?:\/\//i.test(url);
    };

    $scope.getnewsurl = function (url) {
        if (isExternalUrl(url)) {
            return url;
        }
        else {
            return 'news/' + url;
        }
    }

  $scope.getjson = function (data) {    
      if (!data) return [];

      // Only parse if it's a JSON string
      if (typeof data === 'string') {
          try {
              return JSON.parse(data);
          } catch (e) {
              console.error('Invalid JSON:', data, e);
              return [];
          }
      }

      // If it's already an object, just return it
      return data;
  };
  
    $scope.GetNewsAndEvents = function () {
       // console.log("hi called");
        $scope.NewsAndEventsData = [];
        
        if ($scope.Type != '') {
            $scope.loading = true;
            var objdata = { "Type": $scope.Type, "ProjectId": ProjectId, "TagName": $scope.TagName, "Date": $scope.PubDate };
           // API.Post("/WebRoute/Get_MediaMaster_Web", objdata).then(function (response) {
            API.Post("https://kubapi.zeelearn.com/V1/cmsapi/api/cms/GetMediaMasterWeb_mvc", objdata).then(function (response) {
                $scope.loading = false;
                if (response.data.data.length > 0) {
               
                    $scope.NewsAndEventsData = $scope.checkundefined(response.data.data);
                  //if ($scope.NewsAndEventsData[0].allfiles) {
                  //    $scope.NewsAndEventsData.forEach(function (item) {
                  //      if (item.allfiles) {
                  //        item.allfiles= JSON.parse(item.allfiles)
                  //      }
                  //    });
                  //  }
                    if ($scope.Type == 'PhotoGallery' || $scope.Type == 'CASGallery') {
                        $scope.categoryNames = $scope.NewsAndEventsData.map(function (cat) {
                            if (cat.categoryName) {
                                return cat.categoryName;
                            }                            
                        }).filter(function (value, index, self) {
                            return value && self.indexOf(value) === index; // remove undefined/null/empty and keep distinct
                        });
                        
                        $scope.oncategoryselection();
                    }
                    if ($scope.Type == 'VideoGallery') {
                        $scope.videodata($scope.NewsAndEventsData);
                    }
                }
            }, function myError(response) {
           });
        }
         
    };

    $scope.videodata = function (videos) {
        const grouped = {};
        videos.forEach(video => {
            const cat = video.categoryName || ''; // empty string for no category
            if (!grouped[cat]) grouped[cat] = [];
            grouped[cat].push(video);
        });

        // Save grouped data to scope
        $scope.groupedVideos = grouped;

        // Get distinct categories in order: blank first
        const categories = Object.keys(grouped).sort((a, b) => {
            if (a === '') return -1; // blank category first
            if (b === '') return 1;
            return a.localeCompare(b); // alphabetical
        });
        $scope.Videoscategories = categories;
    }

    $scope.groupPhotosByYear = function (allfiles) {
        const grouped = {};
        allfiles.forEach(file => {
            if (file.FromDate) {
                const startYear = new Date(file.FromDate).getFullYear();
                const endYear = startYear + 1;
                const yearLabel = `${startYear}-${endYear.toString().slice(-2)}`;
                if (!grouped[yearLabel]) grouped[yearLabel] = [];
                grouped[yearLabel].push(file);
            } else {
                if (!grouped['No Date']) grouped['No Date'] = [];
                grouped['No Date'].push(file);
            }
        });

        return Object.keys(grouped)
            .sort((a, b) => {
                if (a === 'No Date') return 1;
                if (b === 'No Date') return -1;
                return parseInt(b.split('-')[0]) - parseInt(a.split('-')[0]);
            })
            .map(yearLabel => ({ yearLabel: yearLabel, files: grouped[yearLabel] }));
    };
    // Prepare grouped data
    $scope.allowedCategories = [
        'Childrens Day Celebration','Investiture Ceremony','Halloween Celebration','First Day of School'
    ];
    $scope.loadMore = function () {
        $scope.visibleCount += $scope.itemsPerPage;
        $scope.visibleFiles = $scope.allFilesFlat.slice(0, $scope.visibleCount);
    };

    $scope.oncategoryselection = function (categoryname) {
        if (!categoryname) {
            $scope.selectedCategory = $scope.categoryNames[0];
        } else {
            $scope.selectedCategory = categoryname;
        }

        $scope.filteredData = $scope.NewsAndEventsData.filter(function (item) {           
            return item.categoryName === $scope.selectedCategory;
        });
        const itemsWithDate = $scope.filteredData.filter(item => item.FromDate);

        // Parse allfiles for each item
        $scope.filteredData.forEach(item => {
            if (item.allfiles && typeof item.allfiles === 'string') {
                item.allfiles = JSON.parse(item.allfiles);
            }
        });

        // Group all items with FromDate by year
        if (itemsWithDate.length > 0) {
            // Flatten all files
            let allFiles = [];
            itemsWithDate.forEach(item => {
                // Parse allfiles if it's a JSON string
                if (typeof item.allfiles === 'string') {
                    try {
                        item.allfiles = JSON.parse(item.allfiles);
                    } catch (e) {
                        console.error('Failed to parse allfiles for item:', item, e);
                        item.allfiles = [];
                    }
                }

                // Ensure allfiles is an array before looping
                if (Array.isArray(item.allfiles)) {
                    item.allfiles.forEach(f => {
                        f.FromDate = item.FromDate || null;
                        f.categoryName = item.categoryName || '';
                        allFiles.push(f);
                    });
                } else {
                    console.warn('Skipping item with invalid allfiles:', item);
                }
            });
            $scope.groupedFilesByYear = $scope.groupPhotosByYear(allFiles);
        } else {
            $scope.groupedFilesByYear = null;
        }

    }
    $scope.filterByYear = function (yearLabel) {
        return function (file) {
            if (!file.FromDate) return false;
            // Extract year from FromDate
            const fileYear = new Date(file.FromDate).getFullYear();
            return fileYear == yearLabel;
        };
    };


    $scope.GetTagCount = function () {
        $scope.TagCountData = [];
        var objdata = { "ProjectId": ProjectId };
        API.Post("/WebRoute/GetTagCount", objdata).then(function (response) {
            if (response.data.length>0) {
                $scope.TagCountData = $scope.checkundefined(response.data);

            }
        }, function myError(response) {
        });
    };
   // $scope.GetTagCount();

    $scope.GetMediaDate = function () {
        $scope, MediaDateData = [];
        if ($scope.Type != '') {
            var objdata = { "Type": "News", "ProjectId": ProjectId };
            API.Post("/WebRoute/GetMediaDate", objdata).then(function (response) {
                if (response.data.length > 0) {
                    $scope.MediaDateData = $scope.checkundefined(response.data);

                }
            }, function myError(response) {
            });
        }
    };
//    $scope.GetMediaDate();

    $scope.GetFilteredNewsAndEvents = function (tagname, publishdate) {
        $scope.TagName = tagname;
        $scope.PubDate = publishdate;
        $scope.GetNewsAndEvents();
    }

    $scope.Comment = {};
    //$scope.SaveComments = function (NewsId) {
    //    $scope.Comment.NewsId = NewsId;
    //    $scope.Comment.ProjectId = ProjectId;
    //    var objdata = $scope.Comment;
    //    API.Post("/WebRoute/SaveComments", objdata).then(function (result) {
    //        if (!angular.isUndefined(result.data)) {
    //            if (result.data.length > 0) {
    //                alert('Saved Successfully...');
    //                $scope.Comment = {};
    //            }
    //        }
    //    }, function myError(response) {
    //    });
    //}


});

App.controller('ContactUsCtrl', function ($scope, $http, $filter, API, $sce) {
    $scope.GetFranchiseedetailsStateCitywise = function (name) {
        $scope.FranchiseeDetailsData = [];
        var objdata = { 'Search': name };
        API.Post("/WebRoute/GetFranchiseedetailsStateCitywise", objdata).then(function (response) {
            if (!response.data.error) {
                $scope.FranchiseeDetailsData = $scope.checkundefined(response.data);
                setTimeout(function () {
                    $('.CenterOwlCarousel').owlCarousel({
                        loop: true,
                        margin: 0,
                        navSpeed: 1000,
                        items: 1,
                        smartSpeed: 1400,
                        autoplay: true,
                        autoplayTimeout: 8000,
                        autoplayHoverPause: true,
                        lazyLoad: true,
                        responsiveClass: false,
                        dots: true,
                        responsive: {
                            0: {
                                //nav: false
                            },
                            480: {},
                            640: {},
                            768: {},
                            1000: {
                                //dots: false,
                                nav: false,
                                navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
                            }
                        }
                    });
                }, 200)
               
            }
        }, function myError(response) {
        });
    };
  //  $scope.GetFranchiseedetailsStateCitywise('India');
   
    $scope.GetCountry = function () {
        $scope.CountryData = [];
        var objdata = {  };
        API.Post("/WebRoute/GetFranchiseeDetails", objdata).then(function (response) {
            if (!response.data.root.subroot.error) {
                $scope.CountryData = $scope.checkundefined(response.data.root.subroot);
                
            }
        }, function myError(response) {
        });
    };
 //   $scope.GetCountry();
    
    $scope.checkundefined = function (obj) {
        return API.Setnullarray(obj);
    };

    $scope.StateData = [];
    $scope.GetStateData = function () {
        $scope.StateData = [];
        $scope.StateData = $scope.checkundefined($scope.Country.State);
        $scope.GetFranchiseedetailsStateCitywise($scope.Country.Country_Name);
    }
    $scope.CityData = [];
    $scope.GetCityData = function () {
        $scope.CityData = [];
        $scope.CityData = $scope.checkundefined($scope.State.City);
        $scope.GetFranchiseedetailsStateCitywise($scope.State.State_Name);
    }
    $scope.FranchiseeData = [];
    $scope.GetFranchiseeData = function () {
        $scope.FranchiseeData = [];
        $scope.FranchiseeData = $scope.checkundefined($scope.City.Franchisee);
        $scope.GetFranchiseedetailsStateCitywise($scope.City.City_Name);
    }
    $scope.GetCentre = function () {
        $scope.FranchiseeDetailsData = [];
        $scope.FranchiseeDetailsData = $scope.checkundefined($scope.Franchisee);
    }
});
App.filter('trustAsHtml', ['$sce', function ($sce) {
    return function (text) {
        return $sce.trustAsHtml(text);
    };
}]);
