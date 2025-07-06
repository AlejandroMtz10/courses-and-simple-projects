package com.example.videogames.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "videogames")
public class videogamesModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_videogame")
    private long id_videogame;
    @Column(name = "id_clasification")
    private Long id_clasification;
    @Column(name = "id_console")
    private Long id_console;
    @Column(name = "videogame")
    private String videogame;
    @Column(name = "price")
    private float price;
    @Column(name = "history_completed")
    private float history_completed;
    @Column(name = "game_completed")
    private boolean game_completed;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_console", insertable = false, updatable = false)
    private consolesModel console;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_clasification", insertable = false, updatable = false)
    private clasifications_esrbModel clasification;


}
