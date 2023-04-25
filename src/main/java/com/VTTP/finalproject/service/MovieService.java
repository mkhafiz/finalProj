package com.VTTP.finalproject.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import org.springframework.web.util.UriComponentsBuilder;


@Service
public class MovieService {

    private  final String URL = "https://imdb-api.com/en/API/Title/";

    @Value("${API_KEY}")
    private String key;

    public String getMovieDeets(String id){

            // Create the url with query string
            String url = UriComponentsBuilder.fromUriString(URL)
            .queryParam("apiKey", key)
            .queryParam("id", id)
            .toUriString();

                // Create the GET request, GET url
                RequestEntity<Void> req = RequestEntity.get(url).build();

                // Make the call to the api
                RestTemplate template = new RestTemplate();
                ResponseEntity<String> resp = template.exchange(req, String.class);                

                // Get the payload and do something with it
                String payload = resp.getBody();
              //  System.out.println("payload: " + payload);
           
             return payload;

        }
        
    }