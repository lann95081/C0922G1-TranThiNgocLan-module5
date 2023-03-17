package com.example.example_final_md5.service;

import com.example.example_final_md5.model.Bus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IBusService {
    Page<Bus> findAll(Pageable pageable);

}
