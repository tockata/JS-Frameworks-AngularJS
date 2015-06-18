app.factory('videoData', function () {
    var videos = [{
        title: 'Course introduction',
        pictureUrl: 'http://www.ninebelize.com/wp-content/uploads/2014/12/Scarlet-Tanager.jpg',
        length: '3:32',
        category: 'IT',
        subscribers: 3,
        date: new Date(2014, 12, 15),
        haveSubtitles: false,
        comments: [{
                username: 'Pesho Peshev',
                content: 'Congratulations Nakov',
                date: new Date(2014, 12, 15, 12, 30, 0),
                likes: 3,
                websiteUrl: 'http://pesho.com/'
            }
        ]},
        {
            title: 'Hobbit',
            pictureUrl: 'http://static.businessinsider.com/image/50815385ecad04cf5c00002e/image.jpg',
            length: '2:22',
            category: 'Adventure',
            subscribers: 5,
            date: new Date(2015, 4, 15),
            haveSubtitles: true,
            comments: [{
                username: 'Pesho Peshev',
                content: 'Congratulations Nakov',
                date: new Date(2014, 12, 15, 12, 30, 0),
                likes: 3,
                websiteUrl: 'http://pesho.com/'
            }, {
                username: 'Gosho Goshev',
                content: 'The best video!',
                date: new Date(2015, 5, 8, 12, 30, 0),
                likes: 5,
                websiteUrl: 'http://pesho.com/'
            }]
        },
        {
            title: 'Lord of the rings: Two Towers',
            pictureUrl: 'http://schneeblog.com/wp-content/uploads/2013/09/lord-of-the-rings-two-towers1.jpg',
            length: '2:48',
            category: 'Fantasy',
            subscribers: 22,
            date: new Date(2012, 11, 29),
            haveSubtitles: true,
            comments: [{
                username: 'Mimi Mimeva',
                content: 'Very bad movie...',
                date: new Date(2015, 1, 14, 12, 30, 0),
                likes: 1,
                websiteUrl: 'http://pesho.com/'
            }]
        }];

    return {
        getVideos: function () {
            return videos;
        },
        getCategories: function () {
            var categories = [];
            videos.forEach(function (video) {
                categories.push(video.category);
            });

            return categories;
        },
        getDates: function () {
            var dates = [];
            videos.forEach(function (video) {
                dates.push(video.date);
            });

            return dates;
        },
        saveVideo: function (video) {
            videos.push(video);
        }
    }
});
