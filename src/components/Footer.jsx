export default function Footer() {
  return (
    <footer class="bg-gray-800 text-white py-4">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center">
          <div>
            <h5 class="text-lg font-bold">My Recipe Book</h5>
            <p class="text-sm">
              &copy; 2024 My Recipe Book. All rights reserved.
            </p>
          </div>
          <div class="flex space-x-4">
            <a href="#" class="hover:underline">
              About
            </a>
            <a href="#" class="hover:underline">
              Contact
            </a>
            <a href="#" class="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
