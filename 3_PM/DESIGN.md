Anthony Tao and Lara Taneeb

We would have three main components: 
    List of Todos
    Add todo bar
    search bar

Each component has subcomponents:

1) List of Todos:
    - unordered list <ul>
    - list elements <li> 
    - delete button next to each <button type = "button">

2) Add todo bar
    - text field <input type="text">
    - add button <button type="button>

3) Search Bar 
    - text field <input type="text">

Data will be stored as a list of objects containing a string and an id (prop). The id's will simply be the number of each todo, and the value would be whatever the name of the task is. 

How data will transfer between those components:

Each component will be in a seperate file but they will all access the same information, which we'll call array. 
The list of todos will take in information from the array and be insterted as the elements of the list. The add todo bar will be what gives information from the array. The search bar will access information from the array and then use filter() to give back an array with the elements that contain the key words being searched for. 


The following is an attempt to "draw" the diagram from our notes:

       --------------------------------------Array--------------------------------------
      /                                        ^                                        \ ^
     |                                         |                                        | |
     V                                         |                                        V |
list of todos                                Add Todo Bar                            Search bar   
-unodered list                               -text field                              -text field
  <ul>, <li>                                 <input type="text">                      <input type="text">
-delete button                               -add button                                   
 <button type="button">                       <button type="button">                              
