package com.example.videogames.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "clasifications_esrb")
public class clasifications_esrbModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_clasification")
    private Long id_clasification;
    @Column(name = "Symbol")
    private String symbol;
    @Column(name = "clasification")
    private String clasification;
    @Column(name = "description")
    private String description;

}
