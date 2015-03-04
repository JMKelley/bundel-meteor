var postsData = [
  {
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/',
    image_url: 'http://media.giphy.com/media/xIhGpmuVtuEpi/giphy.gif'
  }, 
  {
    title: 'Meteor',
    url: 'http://meteor.com',
    image_url: 'http://media.giphy.com/media/xIhGpmuVtuEpi/giphy.gif'
  }, 
  {
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com',
    image_url: 'http://media.giphy.com/media/xIhGpmuVtuEpi/giphy.gif'
  },
  {
    title: 'The POO Book',
    url: 'http://themeteorbook.com',
    image_url: 'http://media.giphy.com/media/xIhGpmuVtuEpi/giphy.gif'
  }
];

Template.postsList.helpers({
  posts: postsData
});