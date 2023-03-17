package com.example.example_final_md5.model;

import javax.persistence.*;

@Entity
public class Bus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer busNumber;
    private String garageName;
    private String phone;
    private String email;
    private String timeGo;
    private String timeOut;
    private String startGo;
    private String endGo;

    @ManyToOne
    @JoinColumn(name = "bus_type_id", referencedColumnName = "busTypeId")
    private BusType busType;

    public Bus() {
    }

    public BusType getBusType() {
        return busType;
    }

    public void setBusType(BusType busType) {
        this.busType = busType;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getBusNumber() {
        return busNumber;
    }

    public void setBusNumber(Integer busNumber) {
        this.busNumber = busNumber;
    }

    public String getGarageName() {
        return garageName;
    }

    public void setGarageName(String garageName) {
        this.garageName = garageName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTimeGo() {
        return timeGo;
    }

    public void setTimeGo(String timeGo) {
        this.timeGo = timeGo;
    }

    public String getTimeOut() {
        return timeOut;
    }

    public void setTimeOut(String timeOut) {
        this.timeOut = timeOut;
    }

    public String getStartGo() {
        return startGo;
    }

    public void setStartGo(String startGo) {
        this.startGo = startGo;
    }

    public String getEndGo() {
        return endGo;
    }

    public void setEndGo(String endGo) {
        this.endGo = endGo;
    }
}
