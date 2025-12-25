<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}


$articles = [
  [
    "id" => 1,
    "title" => "Choosing the Right AI Chatbot: A Guide",
    "content" => "If you’ve been looking for a chatbot lately, you’ve probably felt one thing – confusion. There are too many platforms in the market...",
    "status" => "original",
    "published_at" => "2025-11-28",
    "author" => "Simran Jain",
    "category" => "AI Chatbot"
  ],
  [
    "id" => 2,
    "title" => "Choosing the Right AI Chatbot: A Practical Guide for Businesses",
    "content" => "Choosing an AI chatbot today can feel overwhelming. The market is crowded with platforms...",
    "status" => "updated",
    "published_at" => "2025-11-28",
    "author" => "AI-assisted",
    "category" => "AI Chatbot"
  ],
  [
    "id" => 3,
    "title" => "Google Ads: Are You Wasting Your Money on Clicks?",
    "content" => "Most businesses assume that if their ads are leading to high traffic, that means success...",
    "status" => "original",
    "published_at" => "2025-04-10",
    "author" => "Pankaj",
    "category" => "Uncategorized"
  ],
  [
    "id" => 4,
    "title" => "Google Ads: Are You Really Getting Value from Your Clicks?",
    "content" => "Many businesses judge the success of Google Ads campaigns by surface-level metrics...",
    "status" => "updated",
    "published_at" => "2025-04-10",
    "author" => "AI-assisted",
    "category" => "Uncategorized"
  ]
];

echo json_encode([
    'source' => 'BeyondChats Backend',
    'articles' => $articles
]);
