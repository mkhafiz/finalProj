package com.VTTP.finalproject.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.VTTP.finalproject.models.Post;
import com.VTTP.finalproject.models.Sub;
import com.VTTP.finalproject.models.User;


import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findAllBySubreddit(Sub subreddit);

    List<Post> findByUser(User user);
}
