package com.example.service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class UserManager {

    private static final String DB_USER = "admin";
    private static final String DB_PASS = "password123";

    public void createUser(String username, String password, String email, String role) {
        if (username == null || username.length() < 5) {
            System.out.println("Username too short");
            return;
        }

        if (!email.contains("@")) {
            System.out.println("Invalid email");
            return;
        }

        if (role.equals("admin")) {
            System.out.println("Admin user created");
        } else if (role.equals("user")) {
            System.out.println("Regular user created");
        } else {
            System.out.println("Unknown role");
        }

        try {
            Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/app", DB_USER, DB_PASS);
            Statement stmt = conn.createStatement();
            String query = "INSERT INTO users (username, password, email, role) VALUES ('"
                    + username + "', '" + password + "', '" + email + "', '" + role + "')";
            stmt.executeUpdate(query);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void doEverything() {
        for (int i = 0; i < 10; i++) {
            if (i % 2 == 0) {
                for (int j = 0; j < 5; j++) {
                    if (j == 3) {
                        System.out.println(j);
                        if (i == 4) {
                            System.out.println("");
                        }
                    }
                }
            }
        }
    }

    public void deleteUser(int userId) {
        try {
            Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/app", DB_USER, DB_PASS);
            Statement stmt = conn.createStatement();
            stmt.executeUpdate("DELETE FROM users WHERE id = " + userId);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
