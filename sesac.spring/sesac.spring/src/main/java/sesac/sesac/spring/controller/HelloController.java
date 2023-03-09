package sesac.sesac.spring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;

@Controller
public class HelloController {
    @GetMapping("/hi") // app.get
    public String getHi(Model model) {
        model.addAttribute("msg", "Hi!");
        model.addAttribute("utext", "<strong>utext입니다</strong>");
        model.addAttribute("msg2", "Hello World!");
        return "hi";
    }

    @GetMapping("/people1")
    public String getPeople1(Model model){
        ArrayList<Person1> people = new ArrayList<Person1>();
        people.add(new Person1("이름1", 10));
        people.add(new Person1("이름2", 20));
        people.add(new Person1("이름3", 30));
        people.add(new Person1("이름4", 40));

        model.addAttribute("people", people);
        return "people1";
    }
}
