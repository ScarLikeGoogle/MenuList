package com.wdjk.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HelloController {
    @RequestMapping(value = "/", produces = "application/json;charset=UTF-8")
    public String home(){
        return "index";
    }
    @RequestMapping(value = "/tab", produces = "application/json;charset=UTF-8")
    public String tab(){
        return "tab";
    }
}
