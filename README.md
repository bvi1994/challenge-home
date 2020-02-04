This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Welcome to Brandon Vi's take home project for William Sonoma. In order to run this project,
we are gonna have to do setup. Don't worry, I'll guide you along the way.

I did my best to try to respect the time limit that my recruiter gave for this project, which is about three hours. I was given conflicting information but ultimately, I took the word of my recruiter to respect the time limit.

Also, I wasn't given mock ups of what the Product UI should look like as well as the Overlay Carousel. I tried reaching the recruiter about it but he wasn't able to respond to it. Therefore, I had to do my best what the UI looks like. I have attached how I received the Take Home prompt under `Front end Engineer-1.docx`.

Finally, I had a great time doing this project. This gave me a better sense on how the basics of an ecommerence is developed on the front end sign from scratch. Hopefully, this application demonstrates somewhat of my coding skills.

If you have any questions or concerns, don't be afraid to contact me at `brndnv94@gmail.com`.

#Setting up the project:

Step 1: ```npm install --save```

Step 2: Wait for the install to happen.

Step 3: Once npm does its thing, run ```npm start``` and a browswer should open up to http://localhost:3000. Just wait for the page to load and there we go.

Step 4: Play around with it.

To run the test, run ```npm run test``` and some unit tests should be ran with all passing.

#About the Application

`/` route mainly consists of the overview of all the products that was returned from the store's API. If the store's API doesn't work, the application will instead go into the backup JSON and display items from `index.json`.

This component is responsive at around the width of 1000px. When the width is less than `1000px`, only one column is displayed. Greater than `1000px`, three columns are displayed.

`/:product-id` route is the Product Description Page (PDP) for that item. Basically the PDP page consists of an image gallery, item description, price and buttons to "purchase" the item.

Clicking the main image of the photo gallery will open an overlay of carousel of other pages. Click out of that overlay will close it. Below the main image are thumbnails which when clicked on, will show a bigger version of the thumbnail.

If there are price ranges, a choice is to "pick" between the two prices for simplicity sake.

"Add to Cart" button will redirect to `/` of the application. The "Buy Now" button will link to the actual item provided by the API to purchase the item from West Elm.

As with `/` the PDP is responsive to some degree with the same requirements and princples.

#Technologies Used

I used React to write out the components. React-Router-Dom was used for routing. React-image was used to produce the Carousel Modal for time sake.

I used the node-fetch API to grab the API and `index.json` in case the API wasn't working. This project was bootstrapped with `create-react-app`.

#Analysis

##`App.js`

When the page gets loaded, a call is made to the to the West Elm API. If the call is successful, the response is saved in the `productList` state. If the API failed, the catch statement will call the `index.json` as backup to load up dummy products.

We display each element of the `productList` array with the `ProductInfo` component.

In the `index.css`, we would either display three columns for Desktop or one column if we are mobile. This is for responsive design.

##The `ProductInfo` Component

The `ProductInfo` takes in a Product where it would display the information, image and price. If the user were to click on the `ProductInfo` component, we would route the user to the PDP for that item which displays another component.

The `ProductInfo` is accessibility and SEO friendly because we added alt tags to the image. This also describes what the image based on the API details using the alt tags as well as some basic info on the product like the price and what it is.

Each `ProductInfo` links to the `ProductDescriptionPage` component for that particular item.

##The `PDPage` Component

The `PDPage` once again takes an individual product and display a page for that product where one can "add to cart" and "buy now".

Note that in actual code, I would actually send the item, price, quantity and so forth an actual implementation to the back end to be handle by an order processor.  For this implementation however, `Add to Cart` goes back to the results page and `Buy Now` redirects to the actual site where one can buy the item.

When one clicks the big image on the PDP, shows an overlay with a carousal for all thumbnail images. If the user clicks on the thumbnail below the main image, that thumbnail image becomes the main image.

If there is more than once price for the item, radio buttons would appear for the shopper to select what price to pay. In an actual implemation, all possible options would be displayed. However, the API that was given to me didn't show all options so I just chose the lowest and highest price ranges to be the only options.

#What would I improve on?

Given the time constraints, I was more focused on good design and readable code. There are a few things that I think would make this project better.

* Better CSS code, specifically in the PDP page. The big issue is when there are buttons for multiple options, the selection for radio doesn't work properly.  
* Less repeated CSS code in general.
* Perhaps maybe a better page in general like background images
* Better responsiveness on tablet devices like iPad mini
