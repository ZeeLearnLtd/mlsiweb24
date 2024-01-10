App.controller('EnquiryCtrl', function ($scope, $http, $filter, API) {
    $scope.Enq = {};
    $scope.Enq.utm_medium = getQueryStringValue('utm_medium');
    $scope.Enq.utm_source = getQueryStringValue('utm_source');
    $scope.Enq.utm_compaign = getQueryStringValue('utm_campaign');

    $scope.Enq.WillingToInvest = '';
    $scope.Enq.HaveSpace = '';
    $scope.Enq.SoonStartsIn = '';


    $scope.GetCountry = function () {
        $scope.CountryData = [];
        var objdata = {};
        API.Post("/WebRoute/GetFranchiseeDetails", objdata).then(function (response) {
            if (!response.data.root.subroot.error) {
                $scope.CountryData = $scope.checkundefined(response.data.root.subroot);

            }
        }, function myError(response) {
        });
    };
    $scope.GetCountryFranchisee = function () {
        $scope.CountryData = [];
        var objdata = {};
        API.Post("/WebRoute/GetFranchiseeDetailsCity", objdata).then(function (response) {
            if (!response.data.root.subroot.error) {
                $scope.CountryData = $scope.checkundefined(response.data.root.subroot);

            }
        }, function myError(response) {
        });
    };
   
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
            API.Post("/WebRoute/MLSIEnquiry", objdata).then(function (result) {
                if (!angular.isUndefined(result.data)) {
                    if (result.data.length > 0) {
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



    $scope.GetStateCity = function () {
        var StateCityData = [];
        var objdata = { PinCode:$scope.Enq.PinCode };
        API.Post("/WebRoute/GetStateCity", objdata).then(function (result) {
             StateCityData = $scope.checkundefined(result.data);
            if (StateCityData.length > 0) {
                $scope.Enq.State = StateCityData[0].statename;
                $scope.Enq.City = StateCityData[0].districtname;
                $scope.Enq.Location = StateCityData[0].taluk;
            }
            else {
                $scope.Enq.State = '';
                $scope.Enq.City = '';
            }
        }, function myError(response) {
        });
    }
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
    $scope.GetTestimonial();

    $scope.GetNewsAndEvents = function () {
        $scope.NewsAndEventsData = [];
        var objdata = { "Type": 'News', "ProjectId": ProjectId, "PageNo": $scope.PageNo, "NoofRecords": $scope.NoofRecords };
        API.Post("/WebRoute/GetMediaMaster", objdata).then(function (response) {
            if (!response.data.root.subroot.error) {
                $scope.NewsAndEventsData = $scope.checkundefined(response.data.root.subroot);
                
            }
        }, function myError(response) {
        });
    };
    $scope.GetNewsAndEvents();

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
    $scope.GetNewsAndEventsDetails = function (id) {
        $scope.NewsAndEventsData = [];
        var objdata = { "Id": id};
        API.Post("/WebRoute/GetMediaMasterId", objdata).then(function (response) {
            if (!response.data.root.subroot.error) {
                $scope.NewsAndEventsData = $scope.checkundefined(response.data.root.subroot);
                $scope.NewsTitle = $scope.NewsAndEventsData[0].Title;
                $scope.NewsShortDesc = $scope.NewsAndEventsData[0].Short;
                $scope.NewsLongDesc = $scope.NewsAndEventsData[0].Long;
                $scope.MainImagePath = $scope.NewsAndEventsData[0].MainImagePath;
                $scope.PublishedDate = $scope.NewsAndEventsData[0].FromDate;
                $scope.Tag = $scope.NewsAndEventsData[0].TagString.split('$$')[0];
                $scope.NewsId = $scope.NewsAndEventsData[0].Id;
                
            }
        }, function myError(response) {
        });
    };
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

    $scope.GetNewsAndEvents = function () {

        $scope.NewsAndEventsData = [];
        if ($scope.Type != '') {
            var objdata = { "Type": $scope.Type, "ProjectId": ProjectId, "TagName": $scope.TagName, "Date": $scope.PubDate };
            API.Post("/WebRoute/Get_MediaMaster_Web", objdata).then(function (response) {
                if (response.data.length > 0) {
                    $scope.NewsAndEventsData = $scope.checkundefined(response.data);

                }
            }, function myError(response) {
            });
        }
         
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
    $scope.GetTagCount();

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
    $scope.GetMediaDate();

    $scope.GetFilteredNewsAndEvents = function (tagname, publishdate) {
        $scope.TagName = tagname;
        $scope.PubDate = publishdate;
        $scope.GetNewsAndEvents();
    }

    $scope.Comment = {};
    $scope.SaveComments = function (NewsId) {
        $scope.Comment.NewsId = NewsId;
        $scope.Comment.ProjectId = ProjectId;
        var objdata = $scope.Comment;
        API.Post("/WebRoute/SaveComments", objdata).then(function (result) {
            if (!angular.isUndefined(result.data)) {
                if (result.data.length > 0) {
                    alert('Saved Successfully...');
                    $scope.Comment = {};
                }
            }
        }, function myError(response) {
        });
    }


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
    $scope.GetFranchiseedetailsStateCitywise('India');
   
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
    $scope.GetCountry();
    
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

