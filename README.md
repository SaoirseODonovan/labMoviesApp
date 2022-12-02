# Web App Dev 2 - Assignment 1 - ReactJS app.

Name: Saoirse O'Donovan

## Overview.

Used the React framework to design and develop an extension of the Movies Fan app that was created within the labs. 


### New Pages.

[ Provide a bullet-point list of the new pages you added to the Movies Fan add (include modifications to existing pages).]

+ List of Trending movies.
+ List of Popular movies.
+ List of Top Rated movies.
+ List of Actors
+ List of Favourite Actors.
+ (Modified) Movie Details page - added button for Similar movies.
+ Details view of Actor biographies - added chips with various data.

### New Features.

[ Provide a bullet-point list of the __new features__ you added to the Movies Fan app.] 

+ Button on the Movie Details Page that will show similar movies - additional parameterized URL and data hyperlinking.
+ 'More Info' button on the Actors Cards that will show Actors biography - additional parameterized URL and data hyperlinking.
+ New data entity added - Actors.
+ Storybook support.
+ Added filtering by Actor name. 
+ Caching support.

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

npm install

## TMDB endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 

+ /movie/popular - Popular movies.
+ /movie/top_rated - Top rated movies.
+ /movie/trending - Trending movies.
+ /movie/${id}/similar - Similar movies.
+ /person/${id}/images - Movie actor images. 
+ /person/${id} - Movie actor details. 
+ /person/popular - Getting popular actors.
+ /person/${id} - Get actor.

## App Design.

### Component catalogue.

[ Insert a screenshot from the Storybook UI, and highlight the stories that relate to your __new/modified components__ - see the example screenshot below.] .......

e.g.

![](./images/stories.png)

### UI Design.

[ Insert screenshots of the __new app pages__ you developed (including modified existing pages), Have an appropriate caption for each one (see example below).

![ ](./images/detail.png)

>Shows detailed information on a movie. Clicking the 'Reviews' floating action button will display extracts from critic reviews.

![ ](./images/review.png)

>Shows the full review for a movie.

### Routing.

[ List the __new routes__ supported by your app and state the associated page.]

e.g. 

+ /movies/upcoming - The upcoming movies list page.
+ /movies/popular - The popular movies list page.
+ /movies/toprated - The top rated movies list page.
+ /movies/trending - The trending movies list page.
+ /movies/:id/similar - The list of similar movies.
+ /actors/ - The actors list page.
+ /actors/:id - The actor details page showing actors biographies.
+ /actors/favourites - The page showing favourited actors.  


[If relevant, state what aspects of your app are protected/private (i.e. require authentication) and what is public.]

## Independent learning (If relevant).

[ Itemize the technologies/techniques you researched independently and adopted in your project, i.e. aspects not covered in the lectures/labs. Mention the source code filenames that illustrate these  (code excerpts are not required) and provide references to the online resources that helped you (articles/blogs).
