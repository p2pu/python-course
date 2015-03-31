(function(discourseGallery){
    'use strict';

    discourseGallery.loadTopicUserGallery({
        forumUrl: window.discourseUrl,
        topicId: window.discourseTopicId,
        containerId: 'topic-users',
        loadMoreId: 'load-more-users'
    });
})(window.discourseGallery);
