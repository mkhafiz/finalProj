package com.VTTP.finalproject.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.VTTP.finalproject.models.Sub;

import java.util.Optional;

@Repository
public interface SubredditRepository extends JpaRepository<Sub, Long> {

    Optional<Sub> findByName(String subredditName);
}
