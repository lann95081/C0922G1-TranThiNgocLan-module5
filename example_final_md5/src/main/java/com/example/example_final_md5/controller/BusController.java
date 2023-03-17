package com.example.example_final_md5.controller;

import com.example.example_final_md5.service.IBusService;
import com.example.example_final_md5.service.IBusTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class BusController {
    @Autowired
    private IBusService iBusService;

    @Autowired
    private IBusTypeService iBusTypeService;

    @GetMapping("")
    public String showList(Model model,
                           @PageableDefault(value = 3)Pageable pageable) {
        model.addAttribute("busTypeList", iBusTypeService.findAll());
        model.addAttribute("busList",iBusService.findAll(pageable));
        return "list";
    }
}
