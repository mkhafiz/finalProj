/*package com.mini.backend.backEND.mapper;


import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.mini.backend.backEND.dto.CommentsDto;
import com.mini.backend.backEND.model.Comment;
import com.mini.backend.backEND.model.Post;

@Mapper(componentModel = "spring")
public interface CommentMapper {
    @org.springframework.web.bind.annotation.Mapping(target = "id", ignore = true)
    @Mapping(target = "text", source = "commentsDto.text")
    @Mapping(target = "createdDate", expression = "java(java.time.Instant.now())")
    @Mapping(target = "post", source = "post")
    @Mapping(target = "user", source = "user")
    Comment map(CommentsDto commentsDto, Post post, User user);

    @Mapping(target = "postId", expression = "java(comment.getPost().getPostId())")
    @Mapping(target = "userName", expression = "java(comment.getUser().getUsername())")
    CommentsDto mapToDto(Comment comment);
}
*/