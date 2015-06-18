app.controller('VideoSystemController', function ($scope, videoData) {
    $scope.videos = videoData.getVideos();
    loadFiltersData();

    $scope.checkForSubtitles = checkForSubtitles;

    $scope.visibleVideoForm = false;
    $scope.newVideoButtonText = 'Add new video';
    $scope.showAddVideoForm = showAddVideoForm;
    $scope.saveVideo = saveVideo;
    $scope.closeForm = closeForm;

    function checkForSubtitles(haveSubtitles) {
        return haveSubtitles ? 'Yes' : 'No';
    }

    function loadFiltersData() {
        $scope.videos.forEach(function (video) {
            video.dateString = formatDate(video.date);

            if(video.comments) {
                video.likes = countLikes(video.comments);
            }
        });

        $scope.categories = videoData.getCategories();
        $scope.dates = videoData.getDates();
    }

    function showAddVideoForm() {
        if($scope.visibleVideoForm === false) {
            $scope.visibleVideoForm = true;
            $scope.newVideoButtonText = 'Hide form';
        } else {
            $scope.visibleVideoForm = false;
            $scope.newVideoButtonText = 'Add new video';
        }
    }

    function saveVideo(video) {
        videoData.saveVideo(video);
        $scope.video = {};
        $scope.newVideoForm.$setPristine();
        $scope.visibleVideoForm = false;
        $scope.newVideoButtonText = 'Add new video';
        $scope.videos = videoData.getVideos();
        loadFiltersData();
    }

    function closeForm(newVideoForm) {
        $scope.newVideoForm.$setPristine();
        $scope.visibleVideoForm = false;
        $scope.newVideoButtonText = 'Add new video';
    }

    function formatDate(date) {
        var year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate();

        if(month < 10) {
            month = '0' + month;
        }

        if(day < 10) {
            day = '0' + day;
        }

        return day + '-' + month + '-' + year;
    }

    function countLikes(comments) {
        var likes = 0;
        comments.forEach(function (comment) {
            likes += comment.likes;
        });

        return likes;
    }
});