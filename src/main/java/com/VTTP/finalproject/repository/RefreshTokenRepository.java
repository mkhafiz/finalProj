package com.VTTP.finalproject.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.VTTP.finalproject.models.RefreshToken;

import java.util.Optional;

public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Long> {
    Optional<RefreshToken> findByToken(String token);

    void deleteByToken(String token);
}
