# System rezervacji biletów na wydarzenia

## Opis projektu

Projekt "System rezervacji biletów na wydarzenia" jest aplikacją internetową umożliwiającą użytkownikom przeglądanie dostępnych wydarzeń oraz rezerwację biletów na wybrane koncerty. Aplikacja wykorzystuje bazę danych do przechowywania informacji o wydarzeniach i użytkownikach.

## Funkcjonalności

- Rejestracja nowego użytkownika
- Logowanie zarejestrowanych użytkowników
- Przeglądanie dostępnych wydarzeń
- Rezerwacja biletów na wybrane wydarzenia

### Rejestracja nowego użytkownika

Użytkownicy mogą zarejestrować nowe konta, podając swoją nazwę użytkownika i hasło. Po rejestracji, nowi użytkownicy mogą zalogować się do aplikacji.

### Logowanie zarejestrowanych użytkowników

Zarejestrowani użytkownicy mogą zalogować się do swoich kont, podając nazwę użytkownika i hasło.

### Przeglądanie dostępnych wydarzeń

Użytkownicy mogą przeglądać listę dostępnych wydarzeń, obejmującą datę i dostępną liczbę miejsc.

### Rezerwacja biletów na wybrane wydarzenia

Zalogowani użytkownicy mogą rezerwować bilety na wybrane wydarzenia, podając liczbę miejsc do zarezerwowania.

## Instrukcje obsługi

### Uruchomienie aplikacji

1. Sklonuj repozytorium na swój lokalny komputer: `git clone <adres_repozytorium>`
2. Przejdź do katalogu projektu: `cd projekt`
3. Zainstaluj wymagane paczki poprzez wpisanie w terminalu komendy: `npm install`
4. Uruchom aplikację poprzez wpisanie w terminalu komendy: `npm start`

Aplikacja zostanie uruchomiona na porcie 3000. `http://localhost:3000`.

### Wymagania systemowe

Aplikacja wymaga środowiska Node.js oraz bazy danych MongoDB.

### Konfiguracja bazy danych

Upewnij się, że masz zainstalowaną bazę danych MongoDB i uruchomioną lokalnie na porcie domyślnym (27017).

### Uruchomienie MongoDB: 
Po zainstalowaniu MongoDB, uruchom bazę danych MongoDB na swoim komputerze. Można to zrobić, wpisując w terminalu komendę mongod.

Sprawdzenie stanu MongoDB: Upewnij się, że MongoDB działa poprawnie, sprawdzając konsolę, czy nie ma żadnych błędów.

