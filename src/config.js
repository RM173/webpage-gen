//This file should hold all the variables unique to this given webpage.
//See README.md for more information on how to use this file.
//During website creation...
//  the public/index.html file should be edited to include the correct title and meta tags.
//  the package.json and package-lock.json file should be edited to include the correct name, version, description, and author.
//  the manifest.json file should be edited to include the correct name, short_name, description, and theme_color.
//  the public folder should be edited to include the correct images and favicon.
//  If you need to change your Firebase, the src/api/firebase.js file should be edited to include the correct user information
//During webpage creation...
//  Finally, add new objects to the config object to correspond to each page of your website.

const config = {
    myaipets: {
        pageTitle: 'My AI Pets',
        upperHeader: 'Your Virtual Pet World',
        upperParagraph: 'Create, care for, and connect with your unique AI pet.',
        lowerHeader: 'Fun and Friendship',
        lowerParagraph: 'Build bonds and explore activities with your AI companion.',
        feature1Header: 'Pet Customization',
        feature2Header: 'Activity Center',
        feature3Header: 'Emotional Response',
        feature4Header: 'Augmented Reality Feature',
        feature5Header: 'Online Pet Community',
        feature6Header: 'Pet Health Monitoring',
        feature1Paragraph: 'Design your unique pet',
        feature2Paragraph: 'Games, puzzles, and more',
        feature3Paragraph: 'Pets react like real animals',
        feature4Paragraph: 'See pets in your room',
        feature5Paragraph: 'Share and connect with others',
        feature6Paragraph: 'Keep your AI pet healthy',
        //Please place corresponding images in the public folder
        imageNames: [
            'pet-image-1.jpg',
            'pet-image-2.jpg',
            'pet-image-3.jpg',
            'pet-image-4.jpg',
            'pet-image-5.jpg'
          ],
        //To change the website's icon shown on the browser ribbon, replace the favicon.ico file in the public folder
        modalHeader: 'Sign up for beta access',
        modalParagraph: 'This website is currently under development. Users who sign up to the waitlist will receive a longer free trial period upon product launch.',
      },
  
    chessaipro: {
      pageTitle: 'Chess AI Pro',
      upperHeader: 'Chess Mastery Awaits',
      upperParagraph: 'Elevate your chess skills with personalized AI coaching.',
      lowerHeader: 'Virtual Tournament Hub',
      lowerParagraph: 'Compete, learn, and engage in an exciting chess community.',
      feature1Header: 'Skill Assessment',
      feature2Header: 'Personalized Training',
      feature3Header: 'Game Analysis',
      feature4Header: 'Multi-Level AI Opponents',
      feature5Header: 'Community Challenges',
      feature6Header: 'Live Match Streaming',
      feature1Paragraph: 'Identify your strengths and weaknesses',
      feature2Paragraph: 'AI tailored lessons',
      feature3Paragraph: 'In-depth match insights',
      feature4Paragraph: 'Play at your level',
      feature5Paragraph: 'Engage with other players',
      feature6Paragraph: 'Watch live games and learn',
      //Please place corresponding images in the public folder
      imageNames: [
        'chess-image-1.jpg',
        'chess-image-2.jpg',
        'chess-image-3.jpg',
        'chess-image-4.jpg'
      ],
      //To change the website's icon shown on the browser ribbon, replace the favicon.ico file in the public folder
      modalHeader: 'Sign up for beta access',
      modalParagraph: 'This website is currently under development. Users who sign up to the waitlist will receive a longer free trial period upon product launch.',
    },
    mealgeniusai: {
        pageTitle: 'Meal Genius AI',
        upperHeader: 'Your Diet Revolution',
        upperParagraph: 'Tailor your meal plans with AI for a healthy lifestyle.',
        lowerHeader: 'Unleash Culinary Skills',
        lowerParagraph: 'Explore recipes, ingredients, and tips crafted just for you.',
        feature1Header: 'Diet Tracking',
        feature2Header: 'Meal Generator',
        feature3Header: 'Shopping List  ',
        feature4Header: 'Allergy Filters',
        feature5Header: 'Fitness Sync',
        feature6Header: 'Meal History',
        feature1Paragraph: 'Monitor your daily food intake',
        feature2Paragraph: 'Create meals based on preferences',
        feature3Paragraph: 'Automated grocery lists',
        feature4Paragraph: 'Tailor meals to your needs',
        feature5Paragraph: 'Sync with fitness apps',
        feature6Paragraph: 'View past meals',
        //Please place corresponding images in the public folder
        imageNames: [
          'food-image-1.jpg',
          'food-image-2.jpg',
          'food-image-3.jpg',
          'food-image-4.jpg'
        ],
        //To change the website's icon shown on the browser ribbon, replace the favicon.ico file in the public folder
        modalHeader: 'Sign up for beta access',
        modalParagraph: 'This website is currently under developement. Users who sign up to the waitlist will recieve a longer free trial period upon product launch.',
  
      }

  };
  window.config = config;
  export default config;
