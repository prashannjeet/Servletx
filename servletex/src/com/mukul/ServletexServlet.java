package com.mukul;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletResponse;
import javax.servlet.http.*;

//@SuppressWarnings("serial")
public class ServletexServlet extends HttpServlet {
	public void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws IOException {
		resp.setContentType("text/html");
		PrintWriter out = resp.getWriter();
		Date d=new Date();		
		out.println(d);
		String uname=req.getParameter("uname");
		String pwd=req.getParameter("pwd");
		if(uname.equalsIgnoreCase("prashannjeet") && pwd.equals("prashannjeet")){
			//RequestDispatcher requestDispatcher = req.getRequestDispatcher("");
			out.println("<a href=\"index.html\"><br>click here</a>");
		}
		else{
			out.println("<br>Enter valid user Name and Password");
		}
		
	}
}
