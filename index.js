body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.container {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: box-shadow 0.3s ease;
  width: 100%;
  max-width: 800px;
}

.container:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

h1 {
  color: #000000;
}

label {
  font-size: 16px;
  font-weight: bold;
}

.input-group {
  margin-bottom: 20px;
  transition: transform 0.3s ease;
}

.input-group:hover {
  transform: scale(1.05);
}

.btn-success {
  background-color: #28a745;
  border: none;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn-success:hover {
  background-color: #218838;
  transform: scale(1.1);
}

.card {
  border: none;
  border-radius: 10px;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transform: scale(1.05);
}

.modal-content {
  border-radius: 10px;
}

.modal-body img {
  border-radius: 10px;
  transition: filter 0.3s ease;
}

.text-muted {
  color: #6c757d !important;
}
