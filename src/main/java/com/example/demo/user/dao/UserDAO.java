package com.example.demo.user.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.user.bean.UserDTO;

@Repository
public interface UserDAO extends JpaRepository<UserDTO,String>{

}
