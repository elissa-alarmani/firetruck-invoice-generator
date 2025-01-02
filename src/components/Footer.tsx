export function Footer() {
  return (
    <footer className="w-full bg-gray-50 py-4 text-center text-gray-500">
      <p>
        For{' '}
        <a
          href="https://www.withgarage.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Garage
        </a>{' '}
        <span>🚒</span>, Made with <span>❤️</span> by{' '}
        <a
          href="https://github.com/elissa-alarmani/firetruck-invoice-generator"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Elissa Alarmani
        </a>
      </p>
    </footer>
  );
}
