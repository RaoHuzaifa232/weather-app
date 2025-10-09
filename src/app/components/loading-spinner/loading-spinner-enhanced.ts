import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (loadingService.loading()) {
    <div class="loading-overlay">
      <div class="loading-container">
        <div class="weather-loader">
          <div class="sun"></div>
          <div class="cloud"></div>
          <div class="rain"></div>
        </div>
        <p class="loading-text">Loading weather data...</p>
      </div>
    </div>
    }
  `,
  styles: [
    `
      .loading-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 197, 253, 0.1));
        backdrop-filter: blur(5px);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
      }

      .loading-container {
        text-align: center;
      }

      .weather-loader {
        position: relative;
        width: 80px;
        height: 80px;
        margin: 0 auto 20px;
      }

      .sun {
        position: absolute;
        top: 10px;
        left: 10px;
        width: 40px;
        height: 40px;
        background: linear-gradient(135deg, #fbbf24, #f59e0b);
        border-radius: 50%;
        animation: sunRotate 3s linear infinite;
        box-shadow: 0 0 20px rgba(251, 191, 36, 0.5);
      }

      .cloud {
        position: absolute;
        bottom: 10px;
        right: 10px;
        width: 30px;
        height: 20px;
        background: linear-gradient(135deg, #e5e7eb, #d1d5db);
        border-radius: 20px;
        animation: cloudFloat 2s ease-in-out infinite;
      }

      .cloud::before {
        content: '';
        position: absolute;
        top: -10px;
        left: 10px;
        width: 15px;
        height: 15px;
        background: linear-gradient(135deg, #e5e7eb, #d1d5db);
        border-radius: 50%;
      }

      .rain {
        position: absolute;
        bottom: 0;
        left: 15px;
        width: 2px;
        height: 10px;
        background: linear-gradient(180deg, #60a5fa, #3b82f6);
        animation: rainDrop 1s linear infinite;
      }

      .rain::before,
      .rain::after {
        content: '';
        position: absolute;
        width: 2px;
        height: 10px;
        background: linear-gradient(180deg, #60a5fa, #3b82f6);
        animation: rainDrop 1s linear infinite;
      }

      .rain::before {
        left: 8px;
        animation-delay: 0.3s;
      }
      .rain::after {
        left: -8px;
        animation-delay: 0.6s;
      }

      .loading-text {
        color: #1e40af;
        font-size: 14px;
        font-weight: 500;
        animation: pulse 2s ease-in-out infinite;
      }

      @keyframes sunRotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      @keyframes cloudFloat {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-5px);
        }
      }

      @keyframes rainDrop {
        0% {
          transform: translateY(-10px);
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          transform: translateY(20px);
          opacity: 0;
        }
      }

      @keyframes pulse {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }
      }

      /* Responsive adjustments */
      @media (max-width: 768px) {
        .weather-loader {
          width: 60px;
          height: 60px;
        }
        
        .sun {
          width: 30px;
          height: 30px;
        }
        
        .cloud {
          width: 25px;
          height: 15px;
        }
      }
    `,
  ],
})
export class LoadingSpinner {
  protected loadingService = inject(LoadingService);
}
