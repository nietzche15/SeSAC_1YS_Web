package com.example.demo.controller;

import com.example.demo.dto.UserDTO;
import com.example.demo.dto.UserDTO2;
import com.example.demo.dto.UserDTO3;
import com.example.demo.vo.UserVO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.PrintWriter;
import java.util.ArrayList;

import static java.awt.SystemColor.window;

@Controller
public class MainController {
    @GetMapping("/")
    public String main(){ return "request";}

    @GetMapping("/get/response1")
        public String getAPI1(@RequestParam("name") String name2, Model model){
        model.addAttribute("name", name2);
        return "response";
    }
    @GetMapping("/get/response2")
    public String getAPI2(@RequestParam(value = "name", required = false) String name2, Model model){
        model.addAttribute("name", name2);
        return "response";
    }

    @GetMapping("/get/response3/{name}/{age}")
    public String getAPI3(@PathVariable String name, @PathVariable("age") String abc, Model model){
        model.addAttribute("name", name);
        model.addAttribute("age", abc);
        return "response";
    }

    @GetMapping({"/get/response4/{name}","/get/response4/{name}/{age}"})
    public String getAPI4(@PathVariable String name, @PathVariable(value = "age", required = false) String abc, Model model){
        model.addAttribute("name", name);
        model.addAttribute("age", abc);
        return "response";
    }

    @GetMapping("/introduce/{name}")
    public String getIntro1(@PathVariable String name, Model model){
        model.addAttribute("name", name );
        return "response";
    }

    @GetMapping("/introduce2")
    public String getIntro2(@RequestParam("name") String name, @RequestParam("age") Integer age , Model model){
        model.addAttribute("name", name );
        model.addAttribute("age", age);
        return "response";
    }

    @PostMapping("/post/response1")
    public String postAPI1(@RequestParam String name, Model model){
        model.addAttribute("name",name);
        return "response";
    }
    @PostMapping("/post/response2")
    public String postAPI2(@RequestParam(required = false) String name, Model model){
        model.addAttribute("name",name);
        return "response";
    }
    @PostMapping("/post/response3")
    @ResponseBody
    public String postAPI3(@RequestParam(required = false) String name){
        return "이름은 : " + name;
    }

    @PostMapping("/postForm")
    @ResponseBody
    public String postAPI4(@RequestParam String name, @RequestParam String gender,
                           @RequestParam Integer birthY, @RequestParam Integer birthM, @RequestParam Integer birthD,
                           @RequestParam String interest){
        return "이름 : " + name + "\n성별 : " + gender + "\n생년월일 : " + birthY + "-" + birthM + "-" + birthD + "\n관심사 : " + interest;
    }

    @GetMapping("/dto/response1")
    @ResponseBody
    public String dtoAPI1(UserDTO userDTO){
        String msg = userDTO.getName() + " " + userDTO.getAge();
        return msg;
    }
    @PostMapping("/dto/response2")
    @ResponseBody
    public String dtoAPI2(UserDTO userDTO){
        String msg = userDTO.getName() + " " + userDTO.getAge();
        return msg;
    }
    @PostMapping("/dto/response3")
    @ResponseBody
    public String dtoAPI3(@RequestBody UserDTO userDTO){
        String msg = userDTO.getName() + " " + userDTO.getAge();
        return msg;
    }
    @GetMapping("/vo/response1")
    @ResponseBody
    public String voAPI1(UserVO userVO){
        String msg = userVO.getName() + " " + userVO.getAge();
        return msg;
    }
    @PostMapping("/vo/response2")
    @ResponseBody
    public String voAPI2(UserVO userVO){
        String msg = userVO.getName() + " " + userVO.getAge();
        return msg;
    }
    @PostMapping("/vo/response3")
    @ResponseBody
    public String voAPI3(@RequestBody UserVO userVO){
        String msg = userVO.getName() + " " + userVO.getAge();
        return msg;
    }

    @GetMapping("/axios/response1")
    @ResponseBody
    public String axiosAPI1(@RequestParam(value = "name") String name, @RequestParam(value = "age") String age){
        String msg = "이름 : " + name + "\n나이 : " + age;
        return msg;
    }
    @GetMapping("/axios/response2")
    @ResponseBody
    public String axiosAPI2(UserDTO userDTO){
        String msg = "이름 : " + userDTO.getName() + "\n나이 : " + userDTO.getAge();
        return msg;
    }
    @PostMapping("/axios/response3")
    @ResponseBody
    public String axiosAPI3(@RequestParam(value = "name") String name, @RequestParam(value = "age") String age){
        String msg = "이름 : " + name + "\n나이 : " + age;
        return msg;
    }
    @PostMapping("/axios/response4")
    @ResponseBody
    public String axiosAPI4(UserDTO userDTO){
        String msg = "이름 : " + userDTO.getName() + "\n나이 : " + userDTO.getAge();
        return msg;
    }
    @PostMapping("/axios/response5")
    @ResponseBody
    public String axiosAPI5(@RequestBody UserDTO userDTO){
        String msg = "이름 : " + userDTO.getName() + "\n나이 : " + userDTO.getAge();
        return msg;
    }

    @GetMapping("/axios/vo/response1")
    @ResponseBody
    public String axiosvoAPI1(@RequestParam(value = "name") String name, @RequestParam(value = "age") String age){
        String msg = "이름 : " + name + "\n나이 : " + age;
        return msg;
    }
    @GetMapping("/axios/vo/response2")
    @ResponseBody
    public String axiosvoAPI2(UserVO UserVO){
        String msg = "이름 : " + UserVO.getName() + "\n나이 : " + UserVO.getAge();
        return msg;
    }
    @PostMapping("/axios/vo/response3")
    @ResponseBody
    public String axiosvoAPI3(@RequestParam(value = "name") String name, @RequestParam(value = "age") String age){
        String msg = "이름 : " + name + "\n나이 : " + age;
        return msg;
    }
    @PostMapping("/axios/vo/response4")
    @ResponseBody
    public String axiosvoAPI4(UserVO UserVO){
        String msg = "이름 : " + UserVO.getName() + "\n나이 : " + UserVO.getAge();
        return msg;
    }
    @PostMapping("/axios/vo/response5")
    @ResponseBody
    public String axiosvoAPI5(@RequestBody UserVO UserVO){
        String msg = "이름 : " + UserVO.getName() + "\n나이 : " + UserVO.getAge();
        return msg;
    }

    @GetMapping("/axiosForm")
    @ResponseBody
    public String axiosForm1(UserDTO2 UserDTO2){
        String msg = UserDTO2.getName() +"님, 회원가입 성공 !";
        return msg;
    }
    ArrayList<String> userID = new ArrayList<>();
    ArrayList<String> userPW = new ArrayList<>();
    ArrayList<String> userNAME = new ArrayList<>();

    @GetMapping("/user")
    public String User(){ return "signUpIn";}

    @PostMapping("/user/SignUp")
    @ResponseBody
    public String SignUp(UserDTO3 UserDTO3){
        userID.add(UserDTO3.getId());
        userPW.add(UserDTO3.getPw());
        userNAME.add(UserDTO3.getName());

        String msg = UserDTO3.getName() +"님, 회원가입 성공 !";
        return msg;
    }

    @PostMapping("/user/SignIn")
    @ResponseBody
    public String SignIn(@RequestParam String id, @RequestParam String pw, HttpServletResponse response)  throws Exception {
        String msg;
        int idx = userID.indexOf(id);
        if(idx>-1)  msg = userPW.get(idx).equals(pw) ?
                "<script>alert('" + userNAME.get(idx) + "님 환영합니다 !'); location.href='/user/myInfo';</script>"
                : "<script>alert('다시 시도해보세요');</script>";
        else {
            msg = "<script>alert('존재하지 않는 ID입니다');</script>";
        }
        return msg;

    }
}
//
//@Controller
//@RequestMapping("/user/Signin")
//public class ControlSignIn{
//    @RequestMapping("correct")
//    public void correct(HttpServletResponse response) throws Exception {
//        response.setContentType("text/html; charset=UTF-8");
//        PrintWriter out = response.getWriter();
//        out.println("<script>alert('Welcome'); location.href='/user/myInfo';</script>");
//        out.flush();
//    }
//}
