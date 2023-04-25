package com.VTTP.finalproject.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.VTTP.finalproject.models.Post;
import com.VTTP.finalproject.models.Vote;
import com.VTTP.finalproject.models.User;


import java.util.Optional;

@Repository
public interface VoteRepository extends JpaRepository<Vote, Long> {
    Optional<Vote> findTopByPostAndUserOrderByVoteIdDesc(Post post, User currentUser);
}
