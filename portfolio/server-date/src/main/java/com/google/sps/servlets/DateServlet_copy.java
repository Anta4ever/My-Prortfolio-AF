

package com.google.sps.servlets;

import java.io.IOException;
import java.util.Date;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet that responds with the current date. */
@WebServlet("http://afall-sps-spring21.appspot.com/")
public class DateServlet extends HttpServlet {

  @Override

  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    System.out.println("Hello");
   // response.setContentType("text/html;");
   // response.getWriter().println("The server's current date is " + new Date());
  }
}
