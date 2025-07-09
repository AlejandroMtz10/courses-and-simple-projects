package com.example.videogames.dtos;


import com.example.videogames.models.videogamesModel;

public class VideogamesDTO {
    private Long id;
    private String videogame;
    private float price;
    private float historyCompleted;
    private boolean gameCompleted;

    private String consoleName;
    private String esrbClasification;
    private String esrbSymbol;

    public VideogamesDTO(videogamesModel vg) {
        this.id = vg.getId_videogame();
        this.videogame = vg.getVideogame();
        this.price = vg.getPrice();
        this.historyCompleted = vg.getHistory_completed();
        this.gameCompleted = vg.isGame_completed();

        this.consoleName = vg.getConsole() != null ? vg.getConsole().getConsole() : null;
        this.esrbClasification = vg.getClasification() != null ? vg.getClasification().getClasification() : null;
        this.esrbSymbol = vg.getClasification() != null ? vg.getClasification().getSymbol() : null;
    }

    // Getters and setters
    public Long getId() { return id; }
    public String getVideogame() { return videogame; }
    public float getPrice() { return price; }
    public float getHistoryCompleted() { return historyCompleted; }
    public boolean isGameCompleted() { return gameCompleted; }
    public String getConsoleName() { return consoleName; }
    public String getEsrbClasification() { return esrbClasification; }
    public String getEsrbSymbol() { return esrbSymbol; }


}
