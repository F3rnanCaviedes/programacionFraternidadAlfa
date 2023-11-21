from django.test import TestCase

class AppTestCase(TestCase):
    def setUp(self):
        
        pass

    def testProof(self):
       
        self.assertEqual(1, 1)
