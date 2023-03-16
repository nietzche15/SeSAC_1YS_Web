package com.example.demo.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;


@Entity // 해당 클래스는 Entity 클래스
@Table(name="user") // 테이블 명
@Getter
@Setter
public class UserEntity {
    @Id
    @GeneratedValue
    private int id; // id primary key auto_increment
//    @Column(nullable = false)
//    private int password;
    @Column(length=20, nullable = false)
    private String name; // name varchar(20) not null

    @Column(length=20, nullable = false)
    private String nickname;

}
