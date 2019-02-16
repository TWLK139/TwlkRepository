# TwlkRepository
Beginner's Learning Experience.
<!DOCTYPE html> 
<html> 
	<head>
		<link rel="shortcut icon" href="trylogo.PNG" />
		<style>
			body{
				margin-left:120px;
			}
			div{
				padding:0px 20px;
				width: 510px;
				height: 170px;
				overflow:auto;
			}
			.h3_t{
				color:green;
			{
		</style>
	</head>
	<body>
		<h1>My first PHP page</h1>
		<div style="border:skyblue 5px solid;float:left">
			<h3 class="h3_t">测试数据库运行结果</h3>
			<?php 
				$conn=mysqli_connect("localhost","root","");
				if($conn){
					echo "ok";
				}else{
					echo "no";
				}
			?>
			<br>
			<br>
			<img src="shujukuceshi.PNG"/>
		</div>
		<div style="border:skyblue 5px solid;float:left">
			<h3 class="h3_t">定义变量</h3>
			<?php 
				$i=1+9;
			?>
			<h4>" $ i = <em> x </em> ; "</h4>
			<span style="color:blue;">“x”可以是任意数或字符或字符串。</span>
			<br>
			<img src="1.PNG"/>
		</div>
		<div style="border:skyblue 5px solid;float:left">
			<h3 class="h3_t">注释</h3>
			<?php 
				echo "Hello World!<br>"; 
				echo "注释";
				/*echo "注释";
				echo "注释";*/
				//echo "注释";
				#echo "注释";
			?>
			<br>
			<br>
			<img src="2.PNG"/>
		</div>
		<div style="border:skyblue 5px solid;float:left">
			<h3 class="h3_t">输出</h3>
			<h3>i=<?=$i?></h3>
			<?php 
				echo "i=".$i;
				echo "<br>";
				echo $i;
				echo "<br>";
				echo "i";
			?>
			<br>
			<br>
			<img src="3.PNG"/>
		</div>
		<div style="border:skyblue 5px solid;float:left">
			<h3 class="h3_t">php+html输出</h3>
			<h3>i=<?=$i?></h3>
			<?php 
				echo "<span style=\"color:red;\">
					空格的输出，不能直接写“ ”，
					要写“& n b s p”。</span><br>";
				echo "空格前&nbsp;空格后<br>";
				echo " ";/*输出失败*/
				echo"&nbsp;";/*输出成功*/
				echo "空格<br>";
				echo "<hr/>";
				echo "<h1>";echo $i;echo"</h1>";
				echo "<h1>A".$i."（“.”表示拼接）</h1>";
				echo "<h1>";
				echo $i;
				echo"</h1>";
				echo "<h2>$i</h2>";
				echo "<h2>/$i</h2>";
				echo "直接输出字符加引号";
			?>
			<img src="4.PNG"/>
		</div>
		<div style="border:skyblue 5px solid;float:left">
			<h3 class="h3_t">查看变量类型</h3>
			<?php 
				$ce=1;
				var_dump($ce);
				$ce=1.2;
				var_dump($ce);
				$ce="1";
				var_dump($ce);
				$ce="a";
				var_dump($ce);
				var_dump($ce,$i);
				//$ce=b;//错误
				//var_dump($ce);
				print_r($ce);
			?>
			<br>
			<img src="5.PNG"/>
		</div>
		<div style="border:skyblue 5px solid;float:left">
			<h3 class="h3_t">进制</h3>
			<?php 
				$jinzhi=-123;
				echo "<h4>十进制：$jinzhi</h4>";
				$jinzhi=0456;
				echo "<h4>八进制（<span style=\"color:blue;\">开头加“0”，例如“0456”</span>）：$jinzhi</h4>";
				$jinzhi=0X1a;
				echo "<h4>十六进制（<span style=\"color:blue;\">开头加“0X”，例如“0X1a”</span>）：$jinzhi</h4>";
			?>
			<br>
			<img src="6.PNG"/>
		</div>
		<div style="border:skyblue 5px solid;float:left">
			<h3 class="h3_t">函数：整型变量的属性</h3>
			<?php
				echo "INT类型占用字节：".PHP_INT_SIZE."<br>";
				echo "INT类型的最大值：".PHP_INT_MAX."<br>";
			?>
			<br>
			<span style="color:blue;">（当整数超过int类型最大值时，该整数将会自动转换为float类型。）</span>
			<br>
			<br>
			<img src="7.PNG"/>
		</div>
		<div style="border:skyblue 5px solid;float:left">
			<h3 class="h3_t">字符串引号内的特殊输出</h3>
			<?php
				echo "i的值是$i<br>";
				echo 'i的值是$i<br>';
				echo "\"i\"的值是$i<br>";
				echo '\'i\'的值是$i<br>';
				echo "\'i\'的值是$i<br>";
				echo '\"i\"的值是$i<br>';
				echo "\"i\"的值是\n$i<br>";
				echo '\'i\'的值是\n$i<br>';
			?>
			<br>
			<img src="8.PNG"/>
		</div>
		<div style="border:skyblue 5px solid;float:left">
			<h3 class="h3_t">常量定义</h3>
			<h5 style="color:blue;">常量名称一般约定全用大写</h5>
			<?php
				define("CONSTANT","常量值1_1");
				define("Constant","常量值2_1");
				define("constant","常量值3_1");
				echo CONSTANT."<br>";
				echo Constant."<br>";
				echo constant."<br>";
				const CONSTANT2 = "常量值1_2";
				//const函数不能用于在函数内，循环内以及 if 语句之内
				echo CONSTANT2."<br>";
			?>
			<br>
			<img src="9.PNG"/>
		</div>
		<div style="border:skyblue 5px solid;float:left">
			<h3 class="h3_t">浮点数保留的位数</h3>
			<?php
				$float1=7/3;
				$float2=70/3;
				$float3=7/30;
				$float4=7/300;
				echo $float1."<br>";
				echo $float2."<br>";
				echo $float3."<br>";
				echo $float4."<br>";
				echo 2.33333333333335678956789;
				echo "<span style=\"color:blue;\">（四舍五入）</span><br>";
			?>
			<br>
			<img src="10.PNG"/>
		</div>
		<div style="border:skyblue 5px solid;float:left">
			<h3 class="h3_t">自增自减写法</h3>
			<?php
				$zi1=15;
				$zi2=$zi1++;
				$zi3=15;
				$zi4=++$zi3;
				echo $zi1.'：$zi1<br>';
				echo $zi2.'：$zi1++<br>';
				echo $zi3.'：$zi3<br>';
				echo $zi4.'：++$zi3<br>';
			?>
			<br>
			<img src="11.PNG"/>
		</div>
		<div style="border:skyblue 5px solid;float:left">
			<h3 class="h3_t">类型运算（面向对象）</h3>
			<?php
				class dog{};//创建类型
				class cat{};//创建类型
				$mimi=new cat;//创建对象
				$wang=new dog;//创建对象
				var_dump($mimi instanceof dog);//判断类型
				var_dump($mimi instanceof cat);//判断类型
				var_dump($wang instanceof dog);//判断类型
				var_dump($wang instanceof cat);//判断类型
			?>
			<br>
			<img src="12.PNG"/>
		</div>
		<div style="border:skyblue 5px solid;float:left">
			<h3 class="h3_t">switch特殊结果</h3>
			<span style="color:blue;">switch语句会先按照case的顺序匹配执行（不论default在什么位置），
			匹配上后则会一直执行到break结束；若未匹配成功，则会执行break语
			句，一直执行到break结束。</span><br><br>
			<?php
				$sw1=11;
				switch($sw1){
					default:
						echo "sw1是null<br>";
					case 10:
						echo "sw1是10<br>";
						break;
					case 11:
						echo "sw1是11<br>";
						break;
					case 12:
						echo "sw1是12<br>";
						break;
				}
				$sw2=11;
				switch($sw2){
					case 10:
						echo "sw2是10<br>";
						break;
					default:
						echo "sw2是null<br>";
						break;
					case 1.1:
						echo "sw2是1.1<br>";
						break;
					case 12:
						echo "sw2是12<br>";
						break;
				}
				$sw3=11;
				switch($sw3){
					case 10:
						echo "sw3是10<br>";
						break;
					default:
						echo "sw3是null<br>";
						break;
					case 1.1:
						echo "sw3是1.1<br>";
						break;
					case 12:
						echo "sw3是12<br>";
						break;
				}
			?>
			<br>
			<img src="13_1.PNG"/>
			<img src="13_2.PNG"/>
		</div>
		<div style="border:skyblue 5px solid;float:left">
			<h3 class="h3_t">循环空三角</h3>
			<?php
				$ceng=5;
				for($nceng=1;$nceng<=$ceng;$nceng++){
					for($nkong=1;$nkong<=$ceng-$nceng;$nkong++){
						echo "&nbsp;&nbsp;";
					}
					for($nge=1;$nge<=2*$nceng-1;$nge++){
						if(($nge==1)||($nge==(2*$nceng-1))||($nceng==$ceng)){
							echo "*";
						}else{
							echo "&nbsp;&nbsp;";
						}
					}
					echo "<br>";
				}
			?>
			<br>
			<img src="14.PNG"/>
		</div>
		<div style="border:skyblue 5px solid;float:left">
			<h3 class="h3_t">数据提交</h3>
			<form action="TRY.php" action="tryget.php" method="post" style="display:inline-block;background-color:skyblue;width:210px;padding:0 10px;height:150px;">
				<h3>登陆</h3>
				<span>用户：</span><input type="text" name="user"/><br>
				<span>密码：</span><input type="password" name="password"/><br>
				<br>
				<input type="submit" value="GO!"/><div style="display:inline-block;width:38px;height:5px;"></div>
				<select name="grade">
					<option value="管理员">管理员</option>
					<option value="普通用户">普通用户</option>
					<option value="游客">游客</option>
				</select>
			</form>
			<br>
			<img src="15.PNG"/>
		</div>
		<div style="border:skyblue 5px solid;float:left">
			<h3 class="h3_t">循环语句</h3>
			<h5>break X;</h5>
			<span style="color:blue;">跳出当前X层循环</span>
			<h5>continue X;</h5>
			<span style="color:blue;">停止本次循环，并跳到当前X层循环继续执行</span>
			<h5>goto X;</h5>
			<span style="color:blue;">直接跳到代号为“X”的位置</span><br>
			<?php
				$go1=0;
				$go2=1;
				goto TheTarget;
				echo $go1;
				TheTarget:
				echo $go2;
			?>
			<br>
			<img src="16.PNG"/>
		</div>
		<div style="border:skyblue 5px solid;float:left">
			<h3 class="h3_t">PHP页面引用</h3>
			<span style="color:orange;">require会直接引入页面；
			require_once先判断是否已经引入该页面，
			若还未引入过，则引入，若以引入则不再次引入。
			(include和include_once的关系也一样)</span><br>
			<span style="color:red;">在同一个PHP页面中不能同时两个名称完全相同的函数</span><br>
			<span style="color:chocolate;">require引入如果出现致命错误，则会直接终止所有程序；<br>
										   include引入如果出现致命错误，仍会继续执行下面的程序。</span><br>
			<?php
				echo "<span style=\"color:blue;\">require_once&nbsp;&nbsp;(\"文件路径\");</span><br>";
				require_once ("tryget2.php");
				echo "<span style=\"color:blue;\">require&nbsp;&nbsp;(\"文件路径\");</span><br>";
				require ("tryget2.php");
				echo "<span style=\"color:blue;\">$ 变量名=文件路径;</span><br>";
				echo "<span style=\"color:blue;\">require&nbsp;&nbsp;$ 变量名;</span><br>";
				$NewPhpPage="tryget2.php";
				require $NewPhpPage;
				echo "<span style=\"color:blue;\">require&nbsp;&nbsp;\"文件路径\";</span><br>";
				require "tryget2.php";
				echo "<span style=\"color:blue;\">require_once&nbsp;&nbsp;(\"文件路径\");</span>（会引入失败）<br>";
				require_once ("tryget2.php");
				echo "<span style=\"color:blue;\">include&nbsp;&nbsp;(\"文件路径\");</span><br>";
				include ("tryget2.php");
				echo "<span style=\"color:blue;\">$ 变量名=文件路径;</span><br>";
				echo "<span style=\"color:blue;\">include&nbsp;&nbsp;$ 变量名;</span><br>";
				$NewPhpPage="tryget2.php";
				include $NewPhpPage;
				echo "<span style=\"color:blue;\">include&nbsp;&nbsp;\"文件路径\";</span><br>";
				include "tryget2.php";
				echo "<span style=\"color:blue;\">include_once&nbsp;&nbsp;(\"文件路径\");</span>（会引入失败）<br>";
				include_once ("tryget2.php");
			?>
			<img src="17.PNG"/>
		</div>
		<div style="border:skyblue 5px solid;float:left">
			<h3 class="h3_t">函数引用</h3>
			<div style="width:250px;padding:20px 10px;height:90px;background-color: antiquewhite;">
				<form action="TRY.php" method="get">
					<?php
						require "tryget.php";
						@$nuser=Submit($nuser,"user");
						@$nPassW=Submit($nPassW,"password");
						@$nGrade=Submit($ngrade,"grade");
					?>
					<span>用户：</span><input type="text" name="user" value="<?=$nuser?>"/><br>
					<span>密码：</span><input type="text" name="password" value="<?=$nPassW?>"/><br>
					<h5>这是：<?=$nGrade?></h5>
				</form>
			</div>
			<br>
			<img src="18_1.PNG"/>
			<img src="18_2.PNG"/>
		</div>
		<div style="border:skyblue 5px solid;float:left">
			<h3 class="h3_t">函数：删除变量</h3>
			<?php
				$delete="200";
				echo $delete;
				unset($delete);
				echo $delete;
			?>
			<img src="19.PNG"/>
		</div>
		<div style="border:skyblue 5px solid;float:left">
			<h3 class="h3_t">函数：传地址</h3>
			<?php
				$nadress1=20;
				$nadress2=40;
				echo "使用函数前，$ nadress1=".$nadress1."<br>";
				echo "使用函数前，$ nadress2=".$nadress2."<br>";
				adress($nadress1,$nadress2);
				echo "使用函数后，$ nadress1=".$nadress1."<br>";
				echo "使用函数后，$ nadress2=".$nadress2."<br>";
			?>
			<img src="20_1.PNG"/>
			<img src="20_2.PNG"/>
		</div>
		<div style="border:skyblue 5px solid;float:left">
			<h3 class="h3_t">二进制</h3>
			<h4 style="color:blue;"><span style="color:chocolate;">【壹】</span>最高位表符号：<span style="color:red;">“1”负，“0”正</span>。</h4>
			<h4 style="color:blue;"><span style="color:chocolate;">【贰】</span>正数、“0”的 <span style="color:red;">原码 、 反码 、 补码</span> 全都一样。</h4>
			<h4 style="color:blue;"><span style="color:chocolate;">【叁】</span>负数的反码：其<span style="color:red;">原码符号位不变，其余为取反</span>。</h4>
			<h4 style="color:blue;"><span style="color:chocolate;">【肆】</span>负数的补码：其<span style="color:red;">反码加一</span>。</h4>
			<h4 style="color:blue;"><span style="color:orange;">【伍】</span>计算机运算时：始终以<span style="color:red;">补码</span>的形式运算。</h4>
		</div>
		<div style="border:skyblue 5px solid;float:left">
			<h3 class="h3_t">位运算、移位运算</h3>
			<h4 style="color:blue;">[1]按位“<span style="color:orange;">与</span>”<span style="color:chocolate;">全是1，则为1</span>。——<span style="float:right">——【<span style="color:red;">&</span>】</span></h4>
			<h4 style="color:blue;">[2]按位“<span style="color:orange;">或</span>”<span style="color:chocolate;">有一个是1，则为1</span>。——<span style="float:right">——【<span style="color:red;"> | </span>】</span></h4>
			<h4 style="color:blue;">[3]按位“<span style="color:orange;">异或</span>”<span style="color:chocolate;">两个数不相同，则为1</span>。——<span style="float:right">——【<span style="color:red;">^ </span>】</span></h4>
			<h4 style="color:blue;">[4]按位“<span style="color:orange;">取反</span>”<span style="color:chocolate;">0变成1，1变成0</span>。——<span style="float:right">——【<span style="color:red;">~ </span>】</span></h4>
			<h4 style="color:blue;">[5]逻辑“<span style="color:orange;">右移</span>”<span style="color:chocolate;"></span>。——<span style="float:right">——【<span style="color:red;">>></span>】</span></h4>
			<h4 style="color:blue;">[6]逻辑“<span style="color:orange;">左移</span>”<span style="color:chocolate;"></span>。——<span style="float:right">——【<span style="color:red;"><<</span>】</span></h4>
		</div>
		<div style="border:skyblue 5px solid;float:left">
			<h3 class="h3_t">数组创建、遍历、相关函数</h3>
			<?php
				$arr_a[0]=1;
				$arr_a[1]="";
				$arr_a[2]="ara";
				$arr_b=array("一","",2);
				$arr_c=array(1=>"壹",2=>"",5=>3);
				$arr_d=array("first"=>"yi","second"=>"","third"=>4);
				echo "使用一般索引的数组，arr_a：";
				for($index=0;$index<count($arr_a);$index++){
					echo "arr_a[$index]=".$arr_a[$index]."&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
				}
				echo "<br>";
				echo "使用一般索引的数组，arr_b：";
				for($index=0;$index<count($arr_b);$index++){
					echo "arr_b[$index]=".$arr_b[$index]."&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
				}
				echo "<br>";
				echo "使用特殊索引的数组，arr_c：";
				foreach($arr_c as $index=>$value){
					echo "arr_c[$index]=".$value."&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
				}
				echo "<br><span style=\"color:blue;\">（不能直接使用for循环）</span><br>";
				echo "使用特殊索引的数组，arr_d：<br>";
				foreach($arr_d as $index=>$value){
					echo "arr_d[$index]=".$value."&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
				}
				echo "<br><span style=\"color:blue;\">（不能直接使用for循环）</span><br>";
				echo "<span style=\"color:orange;\">1</span>，输出数组元素个数：";
				echo '<span style="color:red;">count($arr_a)='.count($arr_a)."</span><br>";
				echo "<span style=\"color:orange;\">2</span>，判断是否是数组：";
				echo '<span style="color:red;">is_array($arr_b)='.is_array($arr_b)."</span><br>";
				echo "<span style=\"color:orange;\">3</span>，显示数组信息：";
				echo '<span style="color:red;">print_r($arr_c)=';
				echo print_r($arr_c);
				echo "</span><br>";
				echo "<span style=\"color:orange;\">4</span>，显示数组详细信息：";
				echo '<span style="color:red;">var_dump($arr_d)=';
				echo var_dump($arr_d);
				echo "</span><br>";
				echo "<span style=\"color:orange;\">5</span>，把字符串拆分成数组：<br>";
				$divide="中国#河南#信阳#羊山#楚王城";
				$arr_divide=explode("#",$divide);
				echo "$ arr_divide数组的信息：";
				echo var_dump($arr_divide);
				echo "<span style=\"color:orange;\">6</span>，删除某个数组元素（或变量）：<br>";
				echo "删除前：";
				echo var_dump($arr_divide);
				echo '<span style="color:red;">unset($arr_divide[3]);'."</span><br>";
				unset($arr_divide[3]);
				echo "删除后：";
				echo var_dump($arr_divide);
				echo "<br><span style=\"color:blue;\">（删除后索引不会重新排列）</span><br>";
				echo "<span style=\"color:orange;\">7</span>，数组合并：<br>";
				$arr_a_c=$arr_a+$arr_c;
				echo var_dump($arr_a_c);
				$arr_c_a=$arr_c+$arr_a;
				echo var_dump($arr_c_a);
				echo "<span style=\"color:blue;\">（若加号左右的数组有相同的索引，则会删除右边元素的对应值，保留左边的数组元素）</span><br>";
			?>
			<img src="21_1.PNG"/>
			<img src="21_2.PNG"/>
			<img src="21_3.PNG"/>
		</div>
		<div style="border:skyblue 5px solid;float:left">
			<h3 class="h3_t">关闭PHP中notice级别的错误提示</h3>
			<span style="color:orange;">1：</span>关闭所有该提示<br>
			<span style="color:blue;">把php.ini文件中的“error_reporting”改为“<span style="color:red;">error_reporting=E_ALL & ~E_NOTICE</span>”。</span><br>
			<span style="color:orange;">2：</span>关闭某页面的该提示<br>
			<span style="color:blue;">在该页面中加入PHP代码：“<span style="color:red;">error_reporting(E_ALL ^ E_NOTICE);</span>”。</span><br>
			<span style="color:orange;">3：</span>关闭某行代码的该提示<br>
			<span style="color:blue;">在该代码前加上符号“<span style="color:red;">@</span>”。</span><br><br>
		</div>
		<div style="border:skyblue 5px solid;float:left">
			<h3 class="h3_t">函数：产生随机数</h3>
			<span style="color:blue;">$元素名=rand(“最小值”,“最大值”);</span><br>
			<span style="color:blue;">$元素名=mt_rand(“最小值”,“最大值”);</span>
			<span style="color:chocolate;">“mt_rand”的性能更好。</span><br>
			<a href="http://www.phplearn.com/TRY.php"><input type="submit" value="刷新"/></a><br>
			<?php
				$Rand_1=rand(1,10);
				echo "一个1~10的随机数：".$Rand_1."<br>";
				$Rand_2=mt_rand(11,100);
				echo "一个11~100的随机数：".$Rand_2."<br>";
			?>
			<img src="23.PNG"/>
		</div>
		<div style="border:skyblue 5px solid;float:left">
			<h3 class="h3_t">顺序查找</h3>
			<?php
				$Smin=100;
				$Smax=120;
				$search=array();
				for ($i=0;$i<20;$i++){
					$search[$i]=mt_rand($Smin,$Smax);
				}
				print_r($search);
				echo "<br>";
				$MyAim=mt_rand($Smin,$Smax);
				#$MyAim=$search[5];
				echo $MyAim."<br>";
				$num=0;
				for($i=0;$i<count($search);$i++){
					if($MyAim==$search[$i]){
						$TheAimI[$i]=$i;
						$num++;
					}
				}
				if($num==0){
					echo "没有找到";
				}else{
					print_r($TheAimI);
				}
			?>
			<br>
			<img src="24.PNG"/>
		</div>
		<div style="border:skyblue 5px solid;float:left">
			<h3 class="h3_t">二分查找</h3>
			<?php
				$Smin=100;
				$Smax=120;
				$search=array();
				$TN=0;
				for ($i=0;$i<20;$i++){
					$search[$i]=mt_rand($Smin,$Smax);
				}
				echo "要查的数是：".$MyAim."<br>";
				MySort($search);
				echo "提供的数组是：<br>";
				print_r($search);
				echo "<br>";
				binarySearch($search,$MyAim,0,(count($search)-1),$TN);
				if($TN!=0){
					echo "这个数共出现了".$TN."次";
				}
			?>
			<br>
			<img src="25_1.PNG"/>
			<img src="25_2.PNG"/>
		</div>
		<div style="border:skyblue 5px solid;float:left">
			<h3 class="h3_t">二维数组创建</h3>
			<?php
				for($i=0;$i<10;$i++){
					for($j=0;$j<10;$j++){
						$SqArray[$i][$j]=mt_rand($Smin,$Smax);
					}
				}
				for($i=0;$i<count($SqArray);$i++){
					for($j=0;$j<count($SqArray[$i]);$j++){
						echo " ".$SqArray[$i][$j]." ";
					}
					echo "<br>";
				}
				echo "<br>其他创建方法（类似于一维数组，仅举两例）<br>";
				$SqArray2=array(
					array(101,102,103,104,105,106),
					array(201,202,203,204,205,206),
					array(301,302,303,304,305,306),
					array(401,402,403,404,405,406),
					array(501,502,503,504,505,506),
					array(601,602,603,604,605,606)
				);
				for($i=0;$i<count($SqArray2);$i++){
					for($j=0;$j<count($SqArray2[$i]);$j++){
						echo " ".$SqArray2[$i][$j]." ";
					}
					echo "<br>";
				}
				$SqArray3_1=array(11,12,13,14);
				$SqArray3_2=array(21,22,23,24);
				$SqArray3_3=array(31,32,33,34);
				$SqArray3_4=array(41,42,43,44);
				$SqArray3=array($SqArray3_1,$SqArray3_2,$SqArray3_3,$SqArray3_4);
				for($i=0;$i<count($SqArray3);$i++){
					for($j=0;$j<count($SqArray3[$i]);$j++){
						echo " ".$SqArray3[$i][$j]." ";
					}
					echo "<br>";
				}
			?>
			<img src="26_1.PNG"/>
			<img src="26_2.PNG"/>
		</div>
		<div style="border:skyblue 5px solid;float:left">
			<h3 class="h3_t">类与对象创建</h3>
			<?php
				class person{
					public $name;
					public $age;
					public $color;
					public function speak(){
						echo "调用方法（函数）成功<br>";
					}
				}
				$i=1;
				#$person=new array;
				$person[1]=new person();
				$person2=new person;
				$person[1]->name="小白";
				$person[1]->age=3;
				$person[1]->color="白";
				$person[1]->speak();
				$person2->name="小花";
				$person2->age=5;
				$person2->color="花";
				echo $person[$i]->name."<br>";
				echo $person2->name;
			?>
			<br>
			<img src="27.PNG"/>
		</div>
		<div style="width:100%;height:50px;padding:0px;"></div>
	</body> 
</html>
