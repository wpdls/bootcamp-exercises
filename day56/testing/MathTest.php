<?php

namespace Exercises\Testing;

use PHPUnit\Framework\TestCase;

class MathTest extends TestCase
{
    public function testBoolean()
    {
        $this->assertTrue(true);
    }

    public function testMultiplyResult()
    {
        $result = Math::multiply(3, 4);

        $this->assertEquals($result, 12);
    }

    public function testDivideResult() 
    {
        $result = Math::divide(10, 2);

        $this->assertEquals($result, 5);
    }

    public function testDivideFirstArgumentNotNumericThrowException()
    {
        $this->expectException('InvalidArgumentException');
        //running the following code SHOULD result in error (exception of class InvalidArgumentException)

        Math::divide('abc', 2);
    }

    public function testAddResult()
    {
        $result = Math::add(1, 2);

        $this->

    }
}