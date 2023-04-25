package com.VTTP.finalproject.models;

import java.io.StringReader;

import jakarta.json.Json;
import jakarta.json.JsonObject;
import jakarta.json.JsonReader;

public class RestModel {

    private String year;
    private String title;
    private String image;
    private String releaseDate;
    private String runtimeStr;
    private String plot;
    private String awards;
    private String directors;

    private String contentRating;
    private String imDbRating;
    private String budget;
    private String cumulativeWorldwideGross;
    // budget under boxOffice
    // cumulativeWorldwideGross under boxOffice
  
    public String getYear() {
        return year;
    }
    public String getContentRating() {
        return contentRating;
    }
    public void setContentRating(String contentRating) {
        this.contentRating = contentRating;
    }
    public String getImDbRating() {
        return imDbRating;
    }
    public void setImDbRating(String imDbRating) {
        this.imDbRating = imDbRating;
    }
    public String getBudget() {
        return budget;
    }
    public void setBudget(String budget) {
        this.budget = budget;
    }
    public String getCumulativeWorldwideGross() {
        return cumulativeWorldwideGross;
    }
    public void setCumulativeWorldwideGross(String cumulativeWorldwideGross) {
        this.cumulativeWorldwideGross = cumulativeWorldwideGross;
    }
    public void setYear(String year) {
        this.year = year;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getImage() {
        return image;
    }
    public void setImage(String image) {
        this.image = image;
    }
    public String getReleaseDate() {
        return releaseDate;
    }
    public void setReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
    }
    public String getRuntimeStr() {
        return runtimeStr;
    }
    public void setRuntimeStr(String runtimeStr) {
        this.runtimeStr = runtimeStr;
    }
    public String getPlot() {
        return plot;
    }
    public void setPlot(String plot) {
        this.plot = plot;
    }
    public String getAwards() {
        return awards;
    }
    public void setAwards(String awards) {
        this.awards = awards;
    }
    public String getDirectors() {
        return directors;
    }
    public void setDirectors(String directors) {
        this.directors = directors;
    }

    public static RestModel create(JsonObject jo) {
        RestModel m = new RestModel();
        m.setYear(jo.getString("year"));
        m.setTitle(jo.getString("title"));
        m.setImage(jo.getString("image"));
        m.setReleaseDate(jo.getString("releaseDate"));
        m.setRuntimeStr(jo.getString("runtimeStr"));
        m.setPlot(jo.getString("plot"));
        m.setAwards(jo.getString("awards"));
        m.setDirectors(jo.getString("directors"));
        m.setContentRating(jo.getString("contentRating"));
        m.setImDbRating(jo.getString("imDbRating;"));
        m.setBudget(jo.getString("budget"));
        m.setCumulativeWorldwideGross(jo.getString("cumulativeWorldwideGross"));
        
        return m;

    }
    public JsonObject toJson() {
        return Json.createObjectBuilder()
            .add("year", year)
            .add("title", title)
            .add("image", image)
            .add("releaseDate", releaseDate)
            .add("runtimeStr", runtimeStr)
            .add("plot", plot)
            .add("awards", awards)
            .add("directors", directors)
            .add("contentRating", contentRating)
            .add("imDbRating", imDbRating)
            .add("budget", budget)
            .add("cumulativeWorldwideGross", cumulativeWorldwideGross)

            .build();
    }

    public static RestModel create(String json) {
		try (StringReader strReader = new StringReader(json)) {
			JsonReader j = Json.createReader(strReader);
			return create(j.readObject());
		}
    }
    
}