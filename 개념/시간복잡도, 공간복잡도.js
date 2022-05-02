/*
시간복잡도 ? 
	1초 = 대략 1억개

공간복잡도 ? 
	1MB = 10^6KB
	512MB의 경우 1.2억개의 int를 사용할 수 있다. (10^6 * 512 / 4)
	보통 100MB 이상이 주어지면 메모리를 신경 쓰지 않아도 되는 수준이다. (100MB = 1억KB, 1억 / 4 = 4천만개의 int를 사용 가능)
	하지만 2MB처럼 메모리가 적게 주어지는 경우 메모리 최적화를 해줘야 한다. (2MB = 2000000KB  2000000 / 4 = 50만개 int 사용 가능)
	2MB를 int로 나누면 50만 정도 밖에 못쓰기 때문에 스택 내에 배열을 쓰는 것도 신경 써줘야 한다.
	512MB = int 변수를 대략 1.2억개 사용 가능

정답의 최대치 int인지 판별
	9천조 까지 가능

*/
