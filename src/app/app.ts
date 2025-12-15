import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Question } from './services/question';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // ESTADO DEL MENU
  hasGameStarted: boolean = false;
  selectedGroupId: number = 1; // Por defecto Grupo 1
  
  // VARIABLES DEL JUEGO
  questions: Question[] = [];
  currentQuestionIndex: number = 0;
  isQuizFinished: boolean = false;
  
  scoreCorrect: number = 0;
  scoreIncorrect: number = 0;
  
  // TIEMPO
  timeLeft: number = 25;
  interval: any;
  startTime: number = 0;
  totalTimePlayed: string = '';

  questionService = inject(Question);
  cdr = inject(ChangeDetectorRef);

  ngOnDestroy() {
    this.stopTimer();
  }

  // MÉTODO PARA INICIAR DESDE EL MENÚ
  startGame() {
    this.hasGameStarted = true;
    this.isQuizFinished = false;
    
    // Obtenemos preguntas según el grupo seleccionado
    this.questions = this.questionService.getQuestions(this.selectedGroupId);
    
    this.currentQuestionIndex = 0;
    this.scoreCorrect = 0;
    this.scoreIncorrect = 0;
    
    this.startTime = new Date().getTime();
    this.resetQuestionState();
  }

  resetQuestionState() {
    this.timeLeft = 25;
    this.startTimer();
  }

  startTimer() {
    this.stopTimer();
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.cdr.detectChanges();
      }
      if (this.timeLeft === 0) {
        this.handleTimeUp();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  selectOption(index: number) {
    this.stopTimer();
    const currentQ = this.questions[this.currentQuestionIndex];
    
    if (index === currentQ.answer) {
      this.scoreCorrect++;
    } else {
      this.scoreIncorrect++;
    }
    this.nextQuestion();
  }

  handleTimeUp() {
    this.stopTimer();
    this.scoreIncorrect++;
    this.nextQuestion();
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.resetQuestionState();
    } else {
      this.isQuizFinished = true;
      this.stopTimer();
      this.calculateTotalTime();
    }
  }

  calculateTotalTime() {
    const endTime = new Date().getTime();
    const durationInSeconds = Math.floor((endTime - this.startTime) / 1000);
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = durationInSeconds % 60;
    
    this.totalTimePlayed = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds} segundos`;
  }

  // VOLVER AL MENÚ PRINCIPAL
  goToMenu() {
    this.hasGameStarted = false;
    this.isQuizFinished = false;
    this.stopTimer();
  }
}
