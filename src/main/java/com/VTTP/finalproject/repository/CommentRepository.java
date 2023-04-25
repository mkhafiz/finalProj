package com.VTTP.finalproject.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.VTTP.finalproject.models.Post;
import com.VTTP.finalproject.models.Comment;
import com.VTTP.finalproject.models.User;


import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByPost(Post post);

    List<Comment> findAllByUser(User user);
}
