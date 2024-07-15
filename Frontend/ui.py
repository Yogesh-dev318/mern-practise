import streamlit as st
# HTML content of the page
page = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fake Image Detection</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css">
    <style>
        body {
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            background-image: url("https://example.com/1.png");
            background-size: cover;
            background-position: center;
        }

        header {
            background-color: transparent;
            color: #fff;
            padding: 20px 0;
            text-align: center;
            position: relative;
            z-index: 1;
        }

        nav {
            background-color: rgba(0, 0, 0, 0.5);
            color: #fff;
            padding: 10px 20px;
        }

        nav a {
            color: #fff;
            text-decoration: none;
            margin: 0 10px;
            transition: color 0.3s ease;
            padding: 10px 20px;
            border-radius: 5px;
            border: 2px solid transparent;
        }

        nav a:hover {
            color: #ffc107;
            border-color: #ffc107;
        }

        .content-container {
            position: relative;
            z-index: 0;
        }

        #container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 80vh;
            flex-direction: column;
        }

        #fileInput {
            margin-top: 20px;
            padding: 10px;
            font-size: 18px;
            border: 2px solid #6c757d;
            border-radius: 5px;
            background-color: #fff;
            cursor: pointer;
        }

        #output {
            margin-top: 20px;
            font-size: 20px;
            color: #6c757d;
        }

        #firSection {
            background-color: rgba(255, 255, 255, 0.4);
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            margin-top: 40px;
        }

        #firSection h2 {
            margin-bottom: 20px;
            color: #343a40;
        }

        #firForm input[type="text"],
        #firForm input[type="email"],
        #firForm textarea {
            width: 100%;
            margin-bottom: 15px;
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        #firForm textarea {
            height: 100px;
        }

        #firForm button {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #343a40;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        #firForm button:hover {
            background-color: #212529;
        }
    </style>
</head>
<body>
<header>
    <h1>Pinncohio's Nose</h1>
</header>
<nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
    <div class="container">
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="#" style="color: white">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" style="color: white">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" style="color: white">Contact</a>
                </li>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#" style="color: white">User Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" style="color: white">User Signup</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" style="color: white">Owner Login</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<div class="content-container">
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <input
                        type="file"
                        id="fileInput"
                        class="form-control mb-3"
                        accept="image/*"
                />
                <div id="output" class="text-center"></div>
            </div>
        </div>
    </div>

    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div id="firSection">
                    <h2>Register FIR</h2>
                    <form id="firForm" action="https://cybercrime.gov.in/Webform/FAQ.aspx">
                        <div class="mb-3">
                            <input
                                    type="text"
                                    class="form-control"
                                    id="name"
                                    placeholder="Your Name"
                                    required
                            />
                        </div>
                        <div class="mb-3">
                            <input
                                    type="email"
                                    class="form-control"
                                    id="email"
                                    placeholder="Your Email"
                                    required
                            />
                        </div>
                        <div class="mb-3">
                            <textarea
                                    class="form-control"
                                    id="reason"
                                    placeholder="Reason for FIR"
                                    rows="3"
                                    required
                            ></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">
                            Submit FIR
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
<script>
    const fileInput = document.getElementById("fileInput");
    const outputDiv = document.getElementById("output");
    const firSection = document.getElementById("firSection");
    const firForm = document.getElementById("firForm");

    fileInput.addEventListener("change", (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const img = new Image();
            img.src = e.target.result;
            img.onload = () => {
                const isFake = detectFakeImage(img);
                outputDiv.textContent = isFake
                        ? "This image might be fake."
                        : "This image seems real.";
            };
        };

        reader.readAsDataURL(file);
    });

    firForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const reason = document.getElementById("reason").value;

        console.log("FIR Submitted:");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Reason:", reason);

        alert("FIR submitted successfully.");
    });

    function detectFakeImage(image) {
        const minWidth = 50;
        const minHeight = 50;

        return image.width < minWidth || image.height < minHeight;
    }
</script>
</body>
</html>
"""
# Display the HTML content
st.markdown(page, unsafe_allow_html=True)