<%- include('partials/header.ejs') %>
<div class="container">
  <div class="widget">
    <form id="form" action="/"  method="post">
    <label for="city">Place:</label>
    <input type="text" name="place" placeholder="Enter a city." autocomplete="off"/>

    <button type="submit" formaction="/get-data" >GO</button>
    <!-- <input id="post" type="submit" value="SUBMIT" formaction="/post-data">  -->
  </form>
</div>

    <div>
      <div>
        <p>
          <%= currentDate %>
        </p>
      </div>
        <h2>
          <%=  city %>
          <%= Country %>
          </h2>
          
        <h3>
          
          <%= tempreture %>
        </h3>
        <p> <b>
            Feels like <%= feelsLike %>.
          <%= discription  %>.
          </b>
        </p>
        <div>
          Wind Speed:
          <%= windSpeed %>,
          Humidity:
          <%= humidity %>%,
          <br>
          Visibility:
          <%= visibility %>,
          Pressure:
          <%= pressure  %>

    </div> 
  </div>
</div>
